import About from "./About Us/About"
import Content from "./About Us/Content"
import BuyPhone from "./Main/BuyPhone"
import Main from "./Main/Main"
import Nav from "./NavBar/Nav"
function App() {
  return (
    <div className=" flex flex-col justify-center items-center min-h-screen w-full bg-radial-gradient">
      <Nav />
      <Main />
      <About/>
    </div>
  )
}

export default App
