import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import databaseService from "../../Firebase/Services/database";
import { back, jar3, razor } from "../../assets/Images/Images";
import CancelOrder from "../../components/CancelOrder";
import StatusBar from "./StatusBar";
import { motion } from "framer-motion";
import fadeIn from "../../Framer/Fadein.js";
import Splash from "../../components/Splash";

function OrderDetails() {
  const { orderId } = useParams();
  const descriptions = {
    placed:
      "Your order has been successfully placed and is being processed for shipping.",
    shipped:
      "Your order has been packed and dispatched. It is on its way to the delivery address.",
    delivered:
      "Your order has been successfully delivered. Thank you for shopping with us!",
    cancelled: "Your order has been cancelled.",
  };
  const Navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.user.userData);
  useEffect(() => {
    async function fetchOrderDetails() {
      try {
        document.body.style.cursor = "wait";
        setLoading(true);

        const info = await databaseService.getOrder(orderId);

        if (info && user?.uid && info.userId === user.uid) {
          setOrderDetails(info);
        } else {
          console.log("No order found");
          Navigate("/");
        }
      } catch (err) {
        console.log(err.message);
      } finally {
        document.body.style.cursor = "default";
        setLoading(false);
      }
    }
    if (user) fetchOrderDetails();
  }, [orderId, user]);

  if (loading) return <Loader />;
  return (
    <div
      id="orderDetails"
      className="w-full md:bg-[url(/bg.svg)] bg-cover bg-top max-w-[102rem] md:max-h-[50rem] md:min-h-[45rem] overflow-x-hidden md:overflow-hidden px-2 md:px-[12rem] min-h-screen flex flex-col justify-center gap-1  items-center"
    >
      <div className="Container w-full min-h-full md:min-h-[75%] mt-[5rem] mb-[2rem] md:mb-0 md:mt-0 flex flex-col justify-center items-center gap-3">
        <div className="options w-full flex justify-start items-center">
          <img
            src={back}
            onClick={() => Navigate("/myOrders")}
            className="md:w-10 w-7 transition-all hover:scale-105"
          ></img>
          <h1 className="text-xl md:text-3xl font-extrabold">Order Details</h1>
        </div>
        <div className="OrderDetailsContainer px-4 py-4 grid grid-cols-1 md:grid-cols-3 gap-4 w-full h-full bg-main rounded-3xl shadow-lg">
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="quantity md:row-span-2 bg-[url(/dripHoney.jpg)] bg-cover bg-top px-4 py-4 flex flex-col justify-start items-center gap-3 rounded-xl"
          >
            <h1 className="text-3xl text-slate-900 font-hotSlice w-full font-medium text-center">
              100% Natural Apis Cerena Honey
            </h1>
            <h1 className="text-base text-gray-500 md:text-lg font-bold">
              Order ID: {orderId}
            </h1>
            <div className="image w-[60%] bg-main flex rounded-xl justify-center items-center">
              <img src={jar3} className="w-[100%] animate-float h-[100%]"></img>
            </div>
            <div className="h-full w-full flex flex-col justify-evenly items-start">
              <div className="w-full">
                <h1 className="text-xl w-full mb-2 font-bold">Quantities</h1>
                {orderDetails?.halfKgJars != 0 && (
                  <div className="flex justify-between w-full">
                    <p className="text-base font-semibold text-gray-500">
                      0.5kg Jar
                    </p>
                    <p className="text-base font-base font-semibold text-gray-500">
                      x{orderDetails?.halfKgJars}
                    </p>
                  </div>
                )}
                {orderDetails?.oneKgJars != 0 && (
                  <div className="flex justify-between w-full">
                    <p className="text-base font-base font-semibold text-gray-500">
                      1kg Jar
                    </p>
                    <p className="text-base font-base font-semibold text-gray-500">
                      x{orderDetails?.oneKgJars}
                    </p>
                  </div>
                )}
                {orderDetails?.twoKgJars != 0 && (
                  <div className="flex justify-between w-full">
                    <p className="text-base font-base font-semibold text-gray-500">
                      2kg Jar
                    </p>
                    <p className="text-base font-base font-semibold text-gray-500">
                      x{orderDetails?.twoKgJars}
                    </p>
                  </div>
                )}
                <div className="flex justify-between w-full mt-3 border-t-[1px] border-gray-400">
                  <p className="text-base font-base font-semibold text-gray-500">
                    Total
                  </p>
                  <p className="text-base font-base font-semibold text-gray-500">
                    {orderDetails?.quantity}kg
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="orderID md:row-span-2 bg-white px-4 flex flex-col justify-between items-start py-4 rounded-xl gap-3 "
          >
            <h1 className="text-xl font-bold">Order Status</h1>
            <div className="w-full flex justify-center items-center">
              <StatusBar orderDetails={orderDetails} />
            </div>
            <div className="statusDescription">
              <h1 className="text-xl font-bold">Status Description</h1>
              <div className="text-sm text-gray-500 w-full font-semibold text-justify">
                <p>{descriptions[orderDetails.status]}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="userDetails bg-white px-4 flex flex-col justify-start items-start gap-[6.5px] py-4 rounded-xl"
          >
            <div className="text-xl w-full font-bold">
              {orderDetails?.userName}
            </div>
            <div className="text-base text-gray-600 w-full font-semibold">
              +91 {orderDetails?.userPhone}
            </div>
            <div className="text-sm text-gray-500 w-full font-semibold">
              {orderDetails?.area}, {orderDetails?.district},{" "}
              {orderDetails?.state}
            </div>
            <div className="text-base text-gray-500 w-full font-semibold">
              Pincode : {orderDetails?.pincode}
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="paymentDetails bg-white px-4 py-4 flex flex-col justify-center gap-8 md:gap-4 items-center rounded-xl"
          >
            <div className="w-full h-full flex flex-col">
              <div className="flex justify-start gap-3 items-center">
                <h1 className="text-xl font-bold">Payment Details</h1>
                <Splash title={orderDetails.paymentStatus} />
              </div>
              <div className="text-base font-base font-semibold text-gray-500 flex justify-between w-full">
                <p>Total amount</p>
                <p>&#8377;{orderDetails?.totalprice}</p>
              </div>
              <div className="text-base font-base font-semibold text-gray-500 flex justify-between w-full">
                <p>Shipping amount</p>
                <p>&#8377;{orderDetails?.shippingCost}</p>
              </div>
              <div className="text-base font-base font-semibold text-gray-500 flex justify-between w-full">
                <p>Payment Id</p>
                <p>{orderDetails?.paymentId}</p>
              </div>
              <div className="text-base border-t-[1px] border-gray-400 mt-3 font-base font-semibold text-gray-500 flex justify-between w-full">
                <p>Grand Total</p>
                <p>
                  &#8377;{orderDetails?.totalprice + orderDetails?.shippingCost}
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
              {orderDetails.status === "placed" && (
                <CancelOrder
                  orderId={orderId}
                  updateOrderStatus={(newStatus) =>
                    setOrderDetails((prev) => ({
                      ...prev,
                      status: newStatus,
                      cancelledDate: new Date().toISOString(),
                      isCancelled: true,
                    }))
                  }
                  setLoading={setLoading}
                />
              )}
              <div className="w-full -mt-5 flex justify-center gap-1 items-center">
                <p className="text-base font-base font-semibold text-gray-500">
                  Secure payment with
                </p>
                <img className="w-20 h-15" src={razor}></img>
              </div>

              <p className="text-xs text-center font-base font-semibold text-gray-500">
                Note : Order cannot be canceled once it has been shipped
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
