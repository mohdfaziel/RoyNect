import Intro from "./About Us/Intro"
import Footer from "./Footer/Footer"
import BuyPhone from "./Main/BuyPhone"
import Main from "./Main/Main"
import Nav from "./NavBar/Nav"
import Legacy from "./About Us/Legacy"
function App() {
  return (
    <div className=" overflow-hidden flex flex-col justify-center items-center min-h-screen w-full bg-radial-gradient">
      <Nav />
      <Main />
      <Intro />
      <Legacy/>
      <Footer/>
    </div>
  )
}

export default App
