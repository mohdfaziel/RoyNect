const checkServiceability = async (pincode) => {
    const stateMapping = {
        "AP": "Andhra Pradesh",
        "AR": "Arunachal Pradesh",
        "AS": "Assam",
        "BR": "Bihar",
        "CG": "Chhattisgarh",
        "GA": "Goa",
        "GJ": "Gujarat",
        "HR": "Haryana",
        "HP": "Himachal Pradesh",
        "JH": "Jharkhand",
        "KA": "Karnataka",
        "KL": "Kerala",
        "MP": "Madhya Pradesh",
        "MH": "Maharashtra",
        "MN": "Manipur",
        "ML": "Meghalaya",
        "MZ": "Mizoram",
        "NL": "Nagaland",
        "OD": "Odisha",
        "PB": "Punjab",
        "RJ": "Rajasthan",
        "SK": "Sikkim",
        "TN": "Tamil Nadu",
        "TS": "Telangana",
        "TR": "Tripura",
        "UP": "Uttar Pradesh",
        "UK": "Uttarakhand",
        "WB": "West Bengal",
        "AN": "Andaman and Nicobar Islands",
        "CH": "Chandigarh",
        "DN": "Dadra and Nagar Haveli and Daman and Diu",
        "DL": "Delhi",
        "JK": "Jammu and Kashmir",
        "LA": "Ladakh",
        "LD": "Lakshadweep",
        "PY": "Puducherry"
      };
      
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/city-state?pincode=${pincode}`);
        const data = await response.json(); 
        if (data.delivery_codes && data.delivery_codes.length > 0) {
            let result = data.delivery_codes[0].postal_code;
            let stateCode = result.state_code;
            let fullStateName = stateMapping[stateCode] || "Unknown State";

            return {
                district: result.district,
                state: fullStateName, 
                serviceable: result.pre_paid === "Y" || result.cod === "Y"
            };
        } else {
            return null;
        }
    } catch (err) {
        console.error("Error fetching serviceability:", err.message);
        return null;
    }
};
export default checkServiceability;