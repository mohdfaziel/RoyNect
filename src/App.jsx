import Footer from "./Footer/Footer"
import Product from "./Product/Product"
import Nav from "./NavBar/Nav"
import About from "./About Us/About"
import { Outlet } from "react-router-dom"
function App() {
  return (
    <div className=" overflow-hidden flex flex-col justify-center items-center min-h-screen w-full bg-radial-gradient">
      <Nav />
     <Outlet/>
    </div>
  )
}

export default App
