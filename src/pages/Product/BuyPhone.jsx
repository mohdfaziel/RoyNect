import { rupee } from "../../assets/Images/Images";
import Count from "./Count";

export default function BuyPhone({onClick, weight, price,qty,setQty }) {
  return (
    <div className="w-full gap-2 md:gap-3 flex transition-all md:hidden flex-col justify-evenly max-h-[25rem] h-fit p-4 bg-white rounded-t-3xl items-start">
      <h1 className="title text-2xl font-extrabold">
        100% Pure & Natural Apis Cerana Honey
      </h1>
      <p className="weight text-lg font-bold text-gray-500">{weight}kg</p>
      <div className="price&Count w-full flex justify-between items-center">
        <div className="price flex justify-center items-center">
          <img src={rupee} loading="lazy" className="w-5" alt="" />
          <h1 className="text-2xl md:text-3xl font-extrabold">{price}</h1>
        </div>
        <Count qty={qty} setQty={setQty}/>
      </div>
      <button onClick={onClick} className="bg-main hover:scale-105 transition-all w-full text-active text-2xl font-extrabold py-2 rounded-full">Add To Cart</button>
    </div>
  );
}
