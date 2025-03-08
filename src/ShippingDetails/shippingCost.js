import { useSelector } from "react-redux";
const shippingCost = async (dest_pin,weight) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/shipping-cost?origin_pincode=${182222}&dest_pincode=${dest_pin}&weight=${weight}`);
        const data = await response.json(); 
        return data[0]; 
    } catch (err) {
        console.error("Error fetching shipping cost:", err.message);
        return null; 
    }
};

export default shippingCost;
