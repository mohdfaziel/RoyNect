import Product from "./Product/Product"
import Nav from "./NavBar/Nav"
import About from "./About Us/About"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Outlet } from "react-router-dom"
import Cart from "./Cart/Cart"
function App() {
  return (
    < >
      <Router>
        <div className="relative overflow-hidden flex flex-col justify-center items-center min-h-screen w-full bg-radial-gradient">
          <Nav/>
          <Routes>
            <Route path="/" element={<Product />} />
            <Route path="about" element={<About />} />
           </Routes>
           <Cart/>
        </div>
      </Router>
    </>
  )
}
export default App
