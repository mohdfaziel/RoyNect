import React from "react";
import Sumry from "../../../assets/Animations/icons/Sumry";
import Payment from "../../../assets/Animations/icons/payment";
import Pay from "./Pay";

function Summary() {
  return (
    <div className="row-span-2  order-last md:order-none flex flex-col gap-5">
      <div className=" border-[2px] flex flex-col justify-center items-start gap-6 border-gray-300 shadow-sm rounded-2xl p-2 md:p-4">
        <div className="w-full flex flex-col gap-4">
          <div className="flex justify-start gap-1 items-center">
            <Sumry />
            <h1 className="text-lg md:text-xl font-bold">OrderDetails</h1>
          </div>
          <div className="w-full pl-2 md:pl-4 flex border-t-[2px] border-b-[2px] border-gray-300 py-2 flex-col md:gap-2 text-base md:text-lg font-bold">
            <div className="flex justify-between">
              <p className="">0.5kg Jar : </p>
              <p className="text-slate-700">2x</p>
            </div>
            <div className="flex justify-between">
              <p className="">1kg Jar : </p>
              <p className="text-slate-700">3x</p>
            </div>
            <div className="flex justify-between">
              <p className="">2kg Jar : </p>
              <p className="text-slate-700">1x</p>
            </div>
            <div className="flex justify-between">
              <p className="">Total Honey : </p>
              <p className="text-slate-700">5kg</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div className="flex justify-start gap-1 items-center">
            <Payment />
            <h1 className="text-lg md:text-xl font-bold">Price Details</h1>
          </div>
          <div className="w-full pl-2 md:pl-4 flex border-t-[2px] border-b-[2px] border-gray-300 py-2 flex-col gap-2 text-base md:text-lg font-bold">
            <div className="flex justify-between">
              <p className="">Total Amount : </p>
              <p className="text-slate-700">2000&#8377;</p>
            </div>
            <div className="flex justify-between">
              <p className="">Shipping Cost : </p>
              <p className="text-slate-700">300&#8377;</p>
            </div>
          </div>
          <div className="flex text-lg md:text-xl pl-2 font-bold md:pl-4 justify-between">
            <p className="">Grand Total : </p>
            <p className="text-slate-700">2300&#8377;</p>
          </div>
        </div>
      </div>
      <Pay/>
    </div>
  );
}

export default Summary;
