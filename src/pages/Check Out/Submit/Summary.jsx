import React from "react";
import Sumry from "../../../components/Animations/Sumry.jsx";
import Payment from "../../../components/Animations/Payment.jsx";
import Pay from "./Pay";
import { useSelector } from "react-redux";
function Summary({ setOrderPlacing }) {
  const items = useSelector((state) => state.cart.items || []);
  const halfKgJar = items.filter((item) => item.id === 1)[0]?.qty || 0;
  const oneKgJar = items.filter((item) => item.id === 2)[0]?.qty || 0;
  const twoKgJar = items.filter((item) => item.id === 3)[0]?.qty || 0;
  const totalHoney = useSelector((state) => state.cart.totalWeight);
  const totalCost = useSelector((state) => state.cart.total);
  //testing for github
  return (
    <div className="row-span-2  order-last md:order-none flex flex-col gap-5">
      <div className=" border-[2px] flex flex-col justify-center items-start gap-6 border-gray-300 shadow-sm rounded-2xl p-2 md:p-4">
        <div className="w-full flex flex-col gap-4">
          <div className="flex justify-start gap-1 items-center">
            <Sumry />
            <h1 className="text-lg md:text-xl font-bold">OrderDetails</h1>
          </div>
          <div className="w-full pl-2 md:pl-4 flex border-t-[2px] border-b-[2px] border-gray-300 py-2 flex-col md:gap-2 text-base md:text-lg font-bold">
            {halfKgJar > 0 && (
              <div className="flex justify-between">
                <p className="">0.5kg Jar : </p>
                <p className="text-slate-700">x{halfKgJar}</p>
              </div>
            )}
            {oneKgJar > 0 && (
              <div className="flex justify-between">
                <p className="">1kg Jar : </p>
                <p className="text-slate-700">x{oneKgJar}</p>
              </div>
            )}
            {twoKgJar > 0 && (
              <div className="flex justify-between">
                <p className="">2kg Jar : </p>
                <p className="text-slate-700">x{twoKgJar}</p>
              </div>
            )}
            <div className="flex justify-between">
              <p className="">Total Honey : </p>
              <p className="text-slate-700">{totalHoney}kg</p>
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
              <p className="text-slate-700">{totalCost}&#8377;</p>
            </div>
            <div className="flex justify-between">
              <p className="">Shipping Cost : </p>
              <p className="text-slate-700">300&#8377;</p>
            </div>
          </div>
          <div className="flex text-lg md:text-xl pl-2 font-bold md:pl-4 justify-between">
            <p className="">Grand Total : </p>
            <p className="text-slate-700">{totalCost + 300}&#8377;</p>
          </div>
        </div>
      </div>
      <Pay setOrderPlacing={setOrderPlacing} />
    </div>
  );
}

export default Summary;
