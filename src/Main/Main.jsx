import { attention, jar3, mainImg, minus, plus, rupee } from "../assets/Images/Images";
import Buy from "./Buy";
import BuyPhone from "./BuyPhone";
import Quantity from "./Quantity";
import { useState } from "react";
export default function Main() {
  const [qty, setQty] = useState("0.5kg");
  const [activeQty, setActiveQty] = useState("0.5");
  const [price, setPrice] = useState("600");
  return (
    <div className="w-full overflow-x-hidden md:overflow-hidden md:pb-7 md:px-[3rem] h-screen flex flex-col justify-between gap-5 md:justify-start  items-center">
      <div className="upper relative z-10 md:relative h-fit md:h-screen flex flex-col md:flex-row md:justify-between justify-center mt-[3rem] md:mt-[8rem] md:items-start items-center w-full">
        <div className="Product md:flex hidden transition-all flex-col justify-center w-96 gap-3 items-start">
          <h1 className="desc text-5xl font-extrabold ">100% Pure & Natural Honey</h1>
          <div className="quantity text-lg">{qty}</div>
        </div>
        <div className="Image animate-float md:animate-none md:absolute w-[20rem] md:w-[75rem] md:-top-[12rem] md:left-1/2 md:transform md:-translate-x-1/2 ">
          <img src={mainImg} className="w-[100%] md:block hidden -z-10" alt="" />
          <img src={jar3} className="w-[100%] md:hidden -z-10" alt="" />
        </div>
        <div className="Quantity flex flex-col justify-center items-center md:items-end gap-5">
          <div className="flex z-20 justify-center items-center gap-3">
            <Quantity
              onClick={() => {
                setQty("0.5kg");
                setActiveQty("0.5");
                setPrice("600");
              }}
              bg={activeQty === "0.5" ? "active" : "Dark3"}
              txt={activeQty === "0.5" ? "white" : "unactive"}
              qty=".5kg"
            />
            <Quantity
              onClick={() => {
                setQty("1kg");
                setActiveQty("1");
                setPrice("1,200");
              }}
              bg={activeQty === "1" ? "active" : "Dark3"}
              txt={activeQty === "1" ? "white" : "unactive"}
              qty="1kg"
            />
            <Quantity
              onClick={() => {
                setQty("2kg");
                setActiveQty("2");
                setPrice("2,400");
              }}
              bg={activeQty === "2" ? "active" : "Dark3"}
              txt={activeQty === "2" ? "white" : "unactive"}
              qty="2kg"
            />
          </div>
          <div className="Attention flex justify-center items-center gap-1">
            <img src={attention} className="w-6" alt="" />
            <p className="text-sm">100% Natural. Always Pure</p>
          </div>
        </div>
        <div className="md:hidden absolute -z-10 w-[30rem] h-[30rem] rounded-full blur-3xl opacity-50 bg-white"></div>
      </div>
      <div className="lower md:flex hidden z-20 h-fit justify-between items-center w-full">
             <p className="text-xl w-[30rem]">Golden, raw, and unfiltered—our honey is harvested directly from our hives, preserving its natural goodness. Perfect for your tea, toast, or as a wholesome treat, it’s the sweetness you can trustk</p>
             <div className="price flex justify-center items-center">
                <h1 className="text-6xl font-extrabold">{price}</h1>
                <img src={rupee} className="w-16" alt="" />
             </div>
             <Buy/>
      </div>
      <BuyPhone qty={qty} price={price}/>
    </div>
  );
}
