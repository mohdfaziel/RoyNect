import React, { useEffect } from "react";
import Details from "./Details";
import Submit from "./Submit/Submit";
import { useState } from "react";
import { motion } from "framer-motion";
import fadeIn from "../../Framer/Fadein";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { check } from "../../assets/Images/Images";
import Loader from "../../components/Loader";
import SEO from "../../components/SEO/SEO";

function CheckOut() {
  const Navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const user = useSelector((state) => state.user.userData);
  const cartItems = useSelector((state) => state.cart.items);
  useEffect(() => {
    if (!user || cartItems.length === 0) {
      Navigate("/");
    }
  }, [user, cartItems.length]);
  const checkOutSteps = [
    {
      name: "Address",
      component: () => <Details handleNext={handleNext} />,
    },
    {
      name: "Submit",
      component: () => <Submit />,
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
    } else {
      Navigate("/");
    }
  }
  const activeComponent = checkOutSteps[currentStep - 1].component;

  // Breadcrumbs for structured data
  const breadcrumbs = [
    { name: "Home", url: "https://roynect.vercel.app/" },
    { name: "Products", url: "https://roynect.vercel.app/product" },
    { name: "Checkout", url: "https://roynect.vercel.app/checkOut" }
  ];

  return (
    <>
      <SEO 
        title="Checkout"
        description="Complete your purchase of premium Kashmiri honey and Apis Cerana honey products from RoyNect. Secure checkout process with multiple payment options. Fast and reliable shipping to your address."
        keywords="checkout, honey purchase, secure payment, RoyNect honey, order confirmation, Kashmiri honey, Apis cerana honey, Bhadarwah honey"
        breadcrumbs={breadcrumbs}
        ogImage="/mainImg2.png"
      />
      <div
        id="myOrders"
        className={`w-full ${
          currentStep == 2 ? "pt-[5rem] pb-[2rem]" : ""
        } max-w-[102rem] md:min-h-[45rem] px-2 md:px-[12rem] min-h-screen flex flex-col justify-center items-center`}
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
              <div
                className={`progress ${
                  currentStep == 1 ? "w-0" : "w-full"
                } transition-all duration-700 ease-in-out bg-main h-full`}
              ></div>
            </div>
          </div>
          {activeComponent()}
          <div
            className={`button flex w-full ${
              currentStep == 2 ? "justify-center" : "justify-between"
            } items-center`}
          >
            <motion.button
              variants={fadeIn("", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className="bg-white px-6 py-3 shadow-md border-[2px] border-white hover:bg-main transition-all text-xl font-bold text-slate-700 rounded-2xl "
              onClick={handleBack}
            >
              Back
            </motion.button>
            <motion.button
              variants={fadeIn("", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className={`bg-white px-6 py-3 shadow-md border-[2px] border-white hover:bg-main transition-all text-xl font-bold text-slate-700 rounded-2xl  ${
                currentStep == 2 ? "hidden" : ""
              }`}
              onClick={() =>
                document
                  .querySelector("form")
                  .dispatchEvent(
                    new Event("submit", { cancelable: true, bubbles: true })
                  )
              }
            >
              Next
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOut;
