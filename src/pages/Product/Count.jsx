import React from "react";
import { minus, plus } from "../../assets/Images/Images";
export default function Count({qty,setQty})
{
    return(
        <div className="amount flex justify-center items-center gap-5">
          <img
            src={minus}
            className="cursor-pointer w-8 md:w-10"
            loading="lazy"
            onClick={() => {
              if (qty > 1) setQty((prevqty) => prevqty - 1);
            }}
            alt=""
          />
          <p className="md:text-4xl text-2xl font-bold min-w-[2rem] md:min-w-[3rem] text-center ">{qty}</p>
          <img
            src={plus}
            loading="lazy"
            className="cursor-pointer w-8 md:w-10"
            onClick={() => {
              if(qty<10){
                setQty((prevqty) => prevqty + 1)
              }
            }}
            alt=""
          />
        </div>
    )
}