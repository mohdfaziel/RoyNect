import Count from "./Count";

export default function Buy({onClick,qty,setQty}) {

  return (
    <div>
      <div className="buy z-10 transition-all flex justify-center items-center gap-10">
        <Count qty={qty} setQty={setQty}/>
        <button onClick={onClick} className="bg-white hover:scale-105 transition-all text-active text-3xl font-bold px-9 py-2 rounded-full">Add To Cart</button>
      </div>
    </div>
  );
}
