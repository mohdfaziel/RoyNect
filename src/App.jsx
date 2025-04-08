import Product from "./pages/Product/Product";
import Nav from "./pages/NavBar/Nav";
import About from "./pages/About Us/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart.jsx";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import authService from "./Firebase/Services/auth";
import MyOrders from "./pages/My Orders/MyOrders";
import OrderDetails from "./pages/My Orders/OrderDetails";
import CheckOut from "./pages/Check Out/CheckOut.jsx";
import Policies from "./pages/Terms and Conditions/Policies.jsx";
import Footer from "./components/Footer.jsx";
import Admin from "./pages/Admin/Admin.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    authService.initAuth(dispatch);
  }, [dispatch]);
  return (
    <>
      <Router>
        <div className="relative overflow-hidden flex flex-col justify-center items-center min-h-screen w-full bg-radial-gradient">
          <Nav />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="product" element={<Product />} />
            <Route path="myOrders" element={<MyOrders />} />
            <Route path="checkOut" element={<CheckOut />} />
            <Route path="myOrders/:orderId" element={<OrderDetails />} />
            <Route path="policies" element={<Policies />} />
            <Route path="admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Cart />
        </div>
        <Footer />
      </Router>
    </>
  );
}
export default App;
