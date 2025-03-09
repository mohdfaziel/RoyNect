import Product from "./pages/Product/Product"
import Nav from "./pages/NavBar/Nav"
import About from "./pages/About Us/About"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart.jsx"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import authService from "./Firebase/Services/auth";
import MyOrders from "./pages/My Orders/MyOrders";
import OrderDetails from "./pages/My Orders/OrderDetails";
import CheckOut from "./pages/Check Out/CheckOut.jsx";
import Policies from "./pages/Terms and Conditions/Policies.jsx";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    authService.initAuth(dispatch);
  }, [dispatch]);
  return (
    < >
      <Router>
        <div className="relative overflow-hidden flex flex-col justify-center items-center min-h-screen w-full bg-radial-gradient">
          <Nav/>
          <Routes>
            <Route path="/" element={<Product />} />
            <Route path="about" element={<About />} />
            <Route path="myOrders" element={<MyOrders />} />
            <Route path="checkOut" element={<CheckOut />} />
            <Route path="myOrders/:orderId" element={<OrderDetails />} />
            <Route path="policies" element={<Policies />} />
           </Routes>
           <Cart/>
        </div>
      </Router>
    </>
  )
}
export default App
