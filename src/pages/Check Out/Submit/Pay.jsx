import React, { useEffect } from "react";
import { useState } from "react";
import databaseService from "../../../Firebase/Services/database";
import { useSelector,useDispatch } from "react-redux";
import { clearOrder } from "../../../Store/OrderDetails/OrderSlice";
import { clearCart } from "../../../Store/Cart/CartSlice";
import { useNavigate } from "react-router-dom";
import sound from '../../../assets/sounds/wind-172559.mp3'
function Pay({ orderPlacing,setOrderPlacing }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const userDetails = useSelector((state) => state.user.userData);
  const orderDetails = useSelector((state) => state.order.orderDetails);
  const items = useSelector((state) => state.cart.items || []);
  const halfKgJar = items.filter((item) => item.id === 1)[0]?.qty || 0;
  const oneKgJar = items.filter((item) => item.id === 2)[0]?.qty || 0;
  const twoKgJar = items.filter((item) => item.id === 3)[0]?.qty || 0;
  const totalHoney = useSelector((state) => state.cart.totalWeight);
  const totalCost = useSelector((state) => state.cart.total);
  console.log(userDetails, orderDetails,totalCost, totalHoney, halfKgJar, oneKgJar, twoKgJar);
  const audio = new Audio(sound);
  async function placeOrder()
  {
    audio.play();
    setOrderPlacing((prev) => !prev);
    const order = {
      userName: userDetails.name,
      userEmail: userDetails.email,
      userPhone: orderDetails.phone,
      houseNo : orderDetails.houseNo,
      area : orderDetails.area,
      pincode : orderDetails.pincode,
      district : orderDetails.district,
      state : orderDetails.state,
      totalprice: totalCost,
      quantity: totalHoney,
      halfKgJars: halfKgJar,
      oneKgJars: oneKgJar,
      twoKgJars: twoKgJar,
    };
    await databaseService.placeOrder(userDetails.uid,order);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    dispatch(clearOrder());
    dispatch(clearCart());
    navigate("/myOrders");
    setOrderPlacing((prev) => !prev);
  }
  return (
    <div className="w-full p-2 md:p-4 flex flex-col transition-all gap-2 rounded-2xl md:rounded-2xl border-[2px] text-sm font-bold border-gray-300 shadow-sm">
      <label className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          className="w-4 h-4 accent-main cursor-pointer"
        />
        I accept the
        <a href="#" className="text-blue-600 ">
          {" "}
          Terms & Conditions
        </a>
        and
        <a href="#" className="text-blue-600 ">
          {" "}
          Privacy Policy
        </a>
      </label>
      <button
        className={`w-full py-2 text-white font-semibold rounded-lg transition-all bg-blue-600 ${
          isChecked ? "opacity-100" : "opacity-50 cursor-not-allowed"
        }`}
        onClick={placeOrder}
        disabled={!isChecked}
      >
        Pay Now
      </button>
    </div>
  );
}

export default Pay;
