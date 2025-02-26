import { firestore } from "../config";
import { doc, setDoc, getDoc, updateDoc, collection, getDocs, addDoc } from "firebase/firestore";

// Database Service
class DatabaseService {
  // ✅ Place Order
  async placeOrder(userId, orderData) {
    try {
        const orderId = `ORD-${Date.now()}`; 
        const orderRef = doc(firestore, "orders", orderId); 

        await setDoc(orderRef, {
            orderId,
            userId,
            ...orderData,
            status: "placed",
            isCancelled: false,
            orderDate: new Date().toISOString(),
        });
        console.log("Order placed successfully:", orderData);
        return orderId;
    } catch (error) {
        console.error("Error placing order:", error);
        return { success: false, error: error.message };
    }
  }
  //Get Order Details
  async getOrder (orderId) {
    try {
      const orderRef = doc(firestore, "orders", orderId);
      const orderSnap = await getDoc(orderRef);
  
      if (orderSnap.exists()) {
        return orderSnap.data();
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error fetching order:", error);
      return null;
    }
  }
  // ✅ Get All Orders for a User
  async getUserOrders(userId) {
    try {
      const ordersRef = collection(firestore, "orders");
      const querySnapshot = await getDocs(ordersRef);
      const userOrders = querySnapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter((order) => order.userId === userId);

      return userOrders;
    } catch (error) {
      console.error("Error fetching user orders:", error);
      return [];
    }
  }

  // ✅ Get All Orders (Admin)
  async getAllOrders() {
    try {
      const ordersRef = collection(firestore, "orders");
      const querySnapshot = await getDocs(ordersRef);
      return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error("Error fetching all orders:", error);
      return [];
    }
  }

  // ✅ Update Order Status (Admin)
  async updateOrderStatus(orderId, status) {
    try {
      const orderRef = doc(firestore, "orders", orderId);
      await updateDoc(orderRef, { status });
      return { success: true };
    } catch (error) {
      console.error("Error updating order status:", error);
      return { success: false, error: error.message };
    }
  }
  //
  async updateAttribute(orderId, attribute, value) {
    try {
      const orderRef = doc(firestore, "orders", orderId);
      const orderSnap = await getDoc(orderRef);
  
      if (orderSnap.exists()) {
        // If order exists, update the attribute
        await updateDoc(orderRef, { [attribute]: value });
      } else {
        // If order doesn't exist, create it with the new attribute
        await setDoc(orderRef, { [attribute]: value }, { merge: true });
      }
  
      return { success: true };
    } catch (error) {
      console.error("Error updating/adding attribute:", error);
      return { success: false, error: error.message };
    }
  }
  

  // ✅ Update User Profile (Phone & Address)
  async updateUserProfile(userId, profileData) {
    try {
      const userRef = doc(firestore, "users", userId);
      await updateDoc(userRef, profileData);
      return { success: true };
    } catch (error) {
      console.error("Error updating user profile:", error);
      return { success: false, error: error.message };
    }
  }

  // ✅ Get Honey Stock
  async getProductStock() {
    try {
      const stockRef = doc(firestore, "products", "honey");
      const stockSnap = await getDoc(stockRef);
      return stockSnap.exists() ? stockSnap.data().stock : 0;
    } catch (error) {
      console.error("Error fetching stock:", error);
      return 0;
    }
  }

  // ✅ Update Honey Stock (Admin)
  async updateProductStock(newStock) {
    try {
      const stockRef = doc(firestore, "products", "honey");
      await updateDoc(stockRef, { stock: newStock });
      return { success: true };
    } catch (error) {
      console.error("Error updating stock:", error);
      return { success: false, error: error.message };
    }
  }
}

const databaseService = new DatabaseService();
export default databaseService;
