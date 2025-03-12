import React, { useState } from "react";
import { useSelector } from "react-redux";
import databaseService from "../../../Firebase/Services/database";
import toast from "react-hot-toast";
function Restock({ orders, users }) {
const honeyAvailable = useSelector((state)=>state.honey.qtyAvailable);
  const [ stock, setStock ] = useState(honeyAvailable);
  const [ loader, setLoader ] = useState(false);
  async function handleSubmit(e)
  {
    e.preventDefault();
    setLoader(true);
    if (!stock) {
        toast.error("Please enter a valid quantity.");
        return;
      }
      try {
        await databaseService.updateProductStock(stock);
        toast.success("Stock updated successfully!");
      } catch (error) {
        console.error("Error updating stock:", error);
        toast.error("Failed to update stock.");
      }finally{
        setLoader(false);
      }
  }
  return (
    <div className="w-full max-h-[35rem] h-full flex justify-center items-start">
      <div className={`container ${loader && "opacity-80"} p-5 w-full h-full rounded-3xl flex flex-col justify-center items-center gap-10 overflow-hidden bg-Aunactive`}>
        <h1 className="text-3xl text-center md:text-4xl font-extrabold text-Adark1">
          Total Honey in Stock (in Kilograms)
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-10">
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className=" px-4 py-2 border-2 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance]:textfield font-medium rounded-3xl border-gray-300 focus:border-Adark1 focus:ring-2 focus:ring-Adark1 outline-none text-center text-xl w-[10rem] md:w-[15rem] md:text-3xl transition-all bg-white shadow-lg"
            placeholder="Enter quantity (kg)"
            required
            min={0}
          />
          <button type="submit" className="px-5 hover:scale-105 transition-all py-2 bg-Adark1 text-white text-lg md:text-2xl font-semibold rounded-full">
            Update Stock
          </button>
        </form>
      </div>
    </div>
  );
}

export default Restock;
