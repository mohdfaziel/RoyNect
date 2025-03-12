import React from "react";
import { whtbee } from "../../assets/Images/Images";

function Option({title,logo1,logo2,page,setPage,setSelectedOrderId}) {
  function handleClick()
  {
    setPage(title);
    setSelectedOrderId(null);
  }
  return (
    <div onClick={handleClick} className={`flex cursor-pointer transition-all justify-start md:pl-4 items-center gap-2 md:w-40 p-2 md:py-2 text-base font-semibold rounded-full  ${page===title ? "bg-Adark1 text-white": "text-slate-900 "} `}>
      <div className="w-8 md:w-5">
        <img src={`${page===title? logo1 : logo2 }`} className="w-full text-white h-full"></img>
      </div>
      <h1 className="hidden md:block">{title}</h1>
    </div>
  );
}

export default Option;
