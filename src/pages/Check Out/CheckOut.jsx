import React, { Component, useEffect } from "react";
import Details from "./Details";
import Submit from "./Submit/Submit";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { check } from "../../assets/Images/Images";
import OrderPlaced from "../../components/OrderPlaced";
function CheckOut() {
  const Navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [orderPlacing, setOrderPlacing] = useState(false);
  const user = useSelector((state) => state.user.userData);
  const cartItems = useSelector((state) => state.cart.items);
  useEffect(() => {
    if (!user || cartItems.length === 0) {
      Navigate("/");
    }},[user, cartItems.length]);
  const checkOutSteps = [
    {
      name: "Address",
      component: () => <Details handleNext={handleNext}/>,
    },
    {
      name: "Submit",
      component: () => <Submit setOrderPlacing={setOrderPlacing}/>,
    },
  ];
  function handleNext() {
    if (currentStep < checkOutSteps.length) {
      setCurrentStep(currentStep + 1);
    }
  }
  function handleBack() {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }else{
      Navigate("/");
    }
  }
  const activeComponent = checkOutSteps[currentStep - 1].component;
  if(orderPlacing) return <OrderPlaced />;
  return (
    <div
      id="myOrders"
      className={`w-full ${currentStep==2? "pt-[5rem] pb-[2rem]":""} max-w-[102rem] md:min-h-[45rem] px-2 md:px-[12rem] min-h-screen flex flex-col justify-center items-center`}
    >
     <div className="container transition-all w-full h-full flex flex-col justify-center items-center gap-5">
     <div className="Stepper w-[95%] md:w-[50%] relative flex justify-between items-center">
        {checkOutSteps.map((step, index) => (
          <div
            className="flex flex-col gap-2 z-10 justify-center items-center"
            key={index}
          >
            <div className="flex justify-center items-center w-9 h-9 bg-white rounded-full">
              <div
                className={`${
                  currentStep >= index + 1 ? "bg-main" : "bg-white"
                } w-7 h-7 rounded-full transition-all flex justify-center items-center`}
              >
                <img
                  className={`w-4 transition-all ${
                    currentStep >= index + 1 ? "opacity-100" : "opacity-30"
                  }`}
                  src={check}
                ></img>
              </div>
            </div>
            <div className="text-base md:text-lg font-bold">{step.name}</div>
          </div>
        ))}
        <div className="progressBar  border-[1px] border-white absolute top-3 left-[5%] w-[90%] h-3 bg-white">
          <div className={`progress ${currentStep==1? "w-0":"w-full"} transition-all duration-700 ease-in-out bg-main h-full`}></div>
        </div>
      </div>
      {activeComponent()}
      <div className="button w-full flex justify-between items-center">
      <button className="bg-white px-6 py-3 shadow-md border-[2px] border-white hover:bg-main transition-all text-xl font-bold text-slate-700 rounded-2xl " onClick={handleBack}>
        Back
      </button>
      <button className={`bg-white px-6 py-3 shadow-md border-[2px] border-white hover:bg-main transition-all text-xl font-bold text-slate-700 rounded-2xl  ${currentStep==2 ? "hidden":""}`} onClick={() => document.querySelector("form").dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }))}>
        Next
      </button>
      </div>
     </div>
    </div>
  );
}

export default CheckOut;
