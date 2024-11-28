import React, { useState } from "react";
import { minus, plus } from "../assets/Images/Images";
export default function Count()
{
    const [num, setNum] = useState(1);
    return(
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
    )
}