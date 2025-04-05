import axios from "axios";
const shippingCost = async (dest_pin, weight) => {
    try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/shipping-cost`,
          {
            params: {
              dest_pincode: dest_pin,
              weight: weight,
            },
          }
        );
    
        return response.data[0];
      } catch (err) {
    console.error("Error fetching shipping cost:", err.message);
    return null;
  }
};

export default shippingCost;
