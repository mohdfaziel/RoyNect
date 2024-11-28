import { attention, mainImg, minus, plus, rupee } from "../assets/Images/Images";
import Buy from "./Buy";
import Quantity from "./Quantity";
import { useState } from "react";
export default function Main() {
  const [qty, setQty] = useState("0.5kg");
  const [activeQty, setActiveQty] = useState("0.5");
  const [price, setPrice] = useState("600");
  return (
    <div className="w-full pb-6 h-screen flex flex-col justify-start  items-center">
      <div className="upper z-10 relative h-screen flex justify-between mt-[10rem] items-start w-full">
        <div className="Product transition-all flex flex-col justify-center w-96 gap-3 items-start">
          <h1 className="desc text-5xl font-extrabold">100% Pure & Natural Honey</h1>
          <div className="quantity text-lg">{qty}</div>
        </div>
        <div className="Image absolute w-[80rem] -top-[12rem] left-1/2 transform -translate-x-1/2 ">
          <img src={mainImg} className="w-[100%] -z-10" alt="" />
        </div>
        <div className="Quantity flex flex-col justify-center items-end gap-5">
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
      </div>
      <div className="lower z-20 flex justify-between items-center w-full">
             <p className="text-xl w-[30rem]">Golden, raw, and unfiltered—our honey is harvested directly from our hives, preserving its natural goodness. Perfect for your tea, toast, or as a wholesome treat, it’s the sweetness you can trustk</p>
             <div className="price flex justify-center items-center">
                <h1 className="text-6xl font-extrabold">{price}</h1>
                <img src={rupee} className="w-16" alt="" />
             </div>
             <Buy/>
      </div>
    </div>
  );
}
