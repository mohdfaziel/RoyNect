import Count from "./Count";

export default function Buy() {

  return (
    <div>
      <div className="buy  transition-all flex justify-center items-center gap-10">
        <Count/>
        <button className="bg-white hover:scale-105 transition-all text-active text-3xl font-bold px-9 py-2 rounded-full">Buy Now</button>
      </div>
    </div>
  );
}
