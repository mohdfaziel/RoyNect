import Product from "./Product/Product"
import Nav from "./NavBar/Nav"
import About from "./About Us/About"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./Cart/Cart"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import authService from "./Firebase/Services/auth";
import MyOrders from "./pages/My Orders/MyOrders";
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
           </Routes>
           <Cart/>
        </div>
      </Router>
    </>
  )
}
export default App
