import React from "react";
import { whtbee } from "../../assets/Images/Images";

function Option({title,logo1,logo2,page,setPage}) {
  return (
    <div onClick={()=>setPage(title)} className={`flex transition-all justify-start pl-4 items-center gap-2 w-40 py-2 text-base font-semibold rounded-full  ${page===title ? "bg-Adark1 text-white": "text-slate-900 "} `}>
      <div className="w-5">
        <img src={`${page===title? logo1 : logo2 }`} className="w-full text-white h-full"></img>
      </div>
      <h1>{title}</h1>
    </div>
  );
}

export default Option;
