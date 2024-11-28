import React, { useState } from "react";
import { minus, plus } from "../assets/Images/Images";
export default function Buy() {
  const [num, setNum] = useState(1);
  return (
    <div>
      <div className="buy transition-all flex justify-center items-center gap-10">
        <div className="amount flex justify-center items-center gap-5">
          <img
            src={minus}
            className="cursor-pointer w-10"
            onClick={() => {
              if (num > 1) setNum((prevnum) => prevnum - 1);
            }}
            alt=""
          />
          <p className="text-4xl font-bold">{num}</p>
          <img
            src={plus}
            className="cursor-pointer w-10"
            onClick={() => setNum((prevnum) => prevnum + 1)}
            alt=""
          />
        </div>
        <button className="bg-white text-active text-3xl font-bold px-9 py-2 rounded-full">Buy Now</button>
      </div>
    </div>
  );
}
