import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import databaseService from "../../Firebase/Services/database";
import { use } from "react";
import { back, jar3, razor } from "../../assets/Images/Images";
import CancelOrder from "../../components/CancelOrder";

function OrderDetails() {
  const { orderId } = useParams();
  const Navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOrderDetails() {
      try {
        document.body.style.cursor = "wait";
        setLoading(true);

        const info = await databaseService.getOrder(orderId);

        if (info) {
          setOrderDetails(info);
        } else {
          console.log("No order found");
        }
      } catch (err) {
        console.log(err.message);
      } finally {
        document.body.style.cursor = "default";
        setLoading(false);
      }
    }

    fetchOrderDetails();
  }, [orderId]);

  if (loading) return <Loader />;

  return (
    // <div className="p-4 max-w-2xl mx-auto bg-white shadow-md rounded-lg">
    //   <h2 className="text-xl font-semibold mb-4">Order Details</h2>
    //   <p>
    //     <strong>Order ID:</strong> {orderId}
    //   </p>
    //   <p>
    //     <strong>Quantity:</strong> {orderDetails.quantity}kg
    //   </p>
    //   <p>
    //     <strong>Total Price:</strong> ₹{orderDetails.totalPrice}
    //   </p>
    //   <p>
    //     <strong>Order Date:</strong>{" "}
    //     {orderDetails.orderDate
    //       ? format(new Date(orderDetails.orderDate.seconds * 1000), "dd MMM yyyy")
    //       : "N/A"}
    //   </p>
    //   <p>
    //     <strong>Status:</strong> {orderDetails.status}
    //   </p>
    // </div>
    <div
      id="orderDetails"
      className="w-full max-w-[102rem] md:max-h-[50rem] md:min-h-[45rem] overflow-x-hidden md:overflow-hidden px-2 md:px-[12rem] min-h-screen flex flex-col justify-center gap-1  items-center"
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
        <div className="OrderDetailsContainer px-4 py-4 flex flex-col md:flex-row justify-center gap-4 items-start w-full h-full bg-main rounded-3xl shadow-lg">
          <div className="left h-full md:w-[50%] w-full flex flex-col justify-center items-center gap-4">
            <div className="orderID h-[30%] w-full bg-white px-4 flex flex-col justify-center items-center gap-3 py-4 rounded-xl">
              <h1 className="text-base md:text-lg font-bold">
                Order ID: {orderId}
              </h1>
              <div className="w-full flex justify-center items-center gap-1">
                <span className="text-gray-500 text-base font-bold">
                  Order Date:
                </span>
                <span className="text-gray-500 text-base font-bold">
                  {orderDetails.orderDate
                    ? format(
                        new Date(orderDetails.orderDate.seconds * 1000),
                        "dd MMM yyyy"
                      )
                    : "N/A"}
                </span>
              </div>
              <div
                className={`px-4 py-2 font-semibold text-sm rounded-full text-white ${
                  orderDetails.status === "Placed"
                    ? "bg-yellow-500"
                    : orderDetails.status === "Shipped"
                    ? "bg-blue-500"
                    : orderDetails.status === "cancelled"
                    ? "bg-red-500"
                    : "bg-green-500"
                }`}
              >
                {orderDetails.status}
              </div>
            </div>
            <div className="quantity h-[70%] w-full bg-white px-4 py-4 flex flex-col md:flex-row justify-start items-center gap-3 rounded-xl">
              <div className="image  w-[50%] h-full bg-main flex rounded-xl justify-center items-center">
                <img src={jar3} className="w-[100%] animate-float h-[100%]"></img>
              </div>
              <div className="h-full w-full md:w-[50%] flex flex-col justify-evenly items-start">
                <h1 className="text-xl w-full font-bold text-center">
                  100% Natural Apis Cerena Honey
                </h1>
                <div className="w-full">
                  <h1 className="text-xl w-full mb-2 font-bold">Quantities</h1>
                  <div className="flex justify-between w-full">
                    <p className="text-base font-base font-semibold text-gray-500">
                      0.5kg Jar
                    </p>
                    <p className="text-base font-base font-semibold text-gray-500">
                      2x
                    </p>
                  </div>
                  <div className="flex justify-between w-full">
                    <p className="text-base font-base font-semibold text-gray-500">
                      1kg Jar
                    </p>
                    <p className="text-base font-base font-semibold text-gray-500">
                      3x
                    </p>
                  </div>
                  <div className="flex justify-between w-full">
                    <p className="text-base font-base font-semibold text-gray-500">
                      2kg Jar
                    </p>
                    <p className="text-base font-base font-semibold text-gray-500">
                      1x
                    </p>
                  </div>
                  <div className="flex justify-between w-full mt-3 border-t-[1px] border-gray-400">
                    <p className="text-base font-base font-semibold text-gray-500">
                      Total
                    </p>
                    <p className="text-base font-base font-semibold text-gray-500">
                      6kg
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rigth h-full w-full md:w-[50%] flex flex-col justify-center items-center gap-4">
            <div className="userDetails h-[30%] w-full bg-white px-4 flex flex-col justify-start items-start gap-[6.5px] py-4 rounded-xl">
              <div className="text-xl w-full font-bold">Mohd Faziel</div>
              <div className="text-base text-gray-600 w-full font-semibold">
                +91 7006205934
              </div>
              <div className="text-sm text-gray-500 w-full font-semibold">
                Knowledge Park II, Greater Noida, UttarPradesh
              </div>
              <div className="text-sm text-gray-500 w-full font-semibold">
                Pincode : 201310
              </div>
            </div>
            <div className="paymentDetails min-h-[17.8rem] w-full bg-white px-4 py-4 flex flex-col justify-between items-center rounded-xl">
              <div className="w-full h-full flex flex-col">
              <h1 className="text-xl w-full font-bold">Payment Details</h1>
                <div className="text-base font-base font-semibold text-gray-500 flex justify-between w-full">
                  <p>Total amount</p>
                  <p>2,000&#8377;</p>
                </div>
                <div className="text-base font-base font-semibold text-gray-500 flex justify-between w-full">
                  <p>Shipping amount</p>
                  <p>200&#8377;</p>
                </div>
                <div className="text-base border-t-[1px] border-gray-400 mt-3 font-base font-semibold text-gray-500 flex justify-between w-full">
                  <p>Grand Total</p>
                  <p>2,200&#8377;</p>
                </div>
              </div>
              <div className="w-full flex flex-col justify-center items-center">
                {orderDetails.status !== "cancelled" ? (
                  <CancelOrder
                    orderId={orderId}
                    updateOrderStatus={(newStatus) =>
                      setOrderDetails((prev) => ({
                        ...prev,
                        status: newStatus,
                      }))
                    }
                    setLoading={setLoading}
                  />
                ):<p className="text-base font-base font-semibold text-gray-500">
                    Order Cancelled
                  </p>}
                <div className="w-full -mt-5 flex justify-center gap-1 items-center">
                  <p className="text-base font-base font-semibold text-gray-500">
                    Secure payment with
                  </p>
                  <img className="w-20 h-15" src={razor}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
