import React from "react";
import { cpy } from "../../../../assets/Images/Images";
import toast from "react-hot-toast";

function Item({ title, value }) {
  const copy = (info)=>
    {
      navigator.clipboard.writeText(info);
      toast.success("Copied To Clipboard");
    }
  return (
    <div className="flex justify-center w-fit text-white font-semibold text-sm md:text-lg items-center gap-3 rounded-full">
      <div>{title} : </div>
      <div
        className={`hidden md:flex justify-center items-center text-gray-400 gap-3  ${
          value === "DELIVERED" && "text-green-500"
        } 
  ${value === "SHIPPED" && "text-blue-500"} 
  ${value === "PLACED" && "text-yellow-500"} 
  ${value === "CANCELLED" && "text-red-500"} `}
      >
        {value}{" "}
        <img
          onClick={() => copy(value)}
          className="w-4 hover:scale-110 transition-all"
          src={cpy}
        ></img>
      </div>
      <div
        className={`flex md:hidden justify-center items-center  ${
          value === "DELIVERED" && "text-green-500"
        } 
  ${value === "SHIPPED" && "text-blue-500"} 
  ${value === "PLACED" && "text-yellow-500"} 
  ${value === "CANCELLED" && "text-red-500"}  text-gray-400 gap-3`}
      >
        {value.length > 20 ? value.slice(0, 20) + " ..." : value}{" "}
        <img
          onClick={() => copy(value)}
          className="w-4 hover:scale-110 transition-all"
          src={cpy}
        ></img>
      </div>
    </div>
  );
}

export default Item;
