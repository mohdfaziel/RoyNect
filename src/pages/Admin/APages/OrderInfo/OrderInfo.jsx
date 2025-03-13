import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { format } from "date-fns";
import Loader from "../Loader";
import Shipped from "./Shipped";
import Delivered from "./Delivered";
import Item from "./Item";
import { cpy } from "../../../../assets/Images/Images";
import InitiateRefund from "./InitiateRefund";
import Refunded from "./Refunded";
function OrderInfo({ orders, selectedOrderId, setSelectedOrderId }) {
  const [loader, setLoader] = useState(false);
  const order = orders.find((order) => order.id === selectedOrderId);
  return (
    <div className="w-full max-h-[31rem] md:max-h-[40rem] h-screen gap-1 flex flex-col justify-center items-start">
      <h1 className="text-3xl font-extrabold  text-Aunactive">Order Details</h1>
      <div className="w-full h-full flex justify-center items-center rounded-3xl overflow-hidden bg-Aunactive">
        {loader ? (
          <Loader />
        ) : (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5 border-[1px] border-Aunactive p-2 md:p-5 h-full rounded-3xl overflow-auto bg-Aunactive">
            <div className="orderdetails bg-Adark1 md:row-span-2 overflow-hidden  rounded-2xl">
              <div className={`container w-full h-full flex flex-col  p-3 gap-1 overflow-auto justify-start items-start`}>
              <Item title="Order Status" value={order.status.toUpperCase()} />
              <Item title="Order Id" value={order.id} />
              <Item title="Txn Id" value={order.paymentId} />
              <Item title="Quantity" value={order.quantity+" kg"} />
              <Item title="Price" value={order.totalprice} />
              <Item title="Shipping Cost" value={order.shippingCost} />
              <Item title="Total Price" value={order.totalprice+order.shippingCost} />
              {order.halfKgJars != 0 && (
                <Item
                  title="No. of Half Kg Jars"
                  value={order.halfKgJars || null}
                />
              )}
              {order.oneKgJars != 0 && (
                <Item
                  title="No. of One Kg Jars"
                  value={order.oneKgJars || null}
                />
              )}
              {order.twoKgJars != 0 && (
                <Item
                  title="No. of Two Kg Jars"
                  value={order.twoKgJars || null}
                />
              )}
              {order.orderDate && (
                <div className="flex justify-start md:justify-center w-full md:w-fit text-white font-semibold text-sm md:text-lg items-center gap-3 rounded-full">
                  <div>Order Date : </div>
                  <div className="flex justify-center items-center text-gray-400 gap-3">
                    {format(
                      typeof order.orderDate === "string"
                        ? new Date(order.orderDate)
                        : new Date(order.orderDate?.seconds * 1000),
                      "dd MMM yyyy, hh:mm a"
                    )}
                  </div>
                </div>
              )}
              {order.shippedDate && (
                <div className="flex  justify-start md:justify-center w-full md:w-fit text-white font-semibold text-sm md:text-lg items-center gap-3 rounded-full">
                  <div>Shipped on : </div>
                  <div className="flex justify-center items-center text-gray-400 gap-3">
                    {format(
                      typeof order.shippedDate === "string"
                        ? new Date(order.shippedDate)
                        : new Date(order.shippedDate?.seconds * 1000),
                      "dd MMM yyyy, hh:mm a"
                    )}
                  </div>
                </div>
              )}
              {order.deliveredDate && (
                <div className="flex  justify-start md:justify-center w-full md:w-fit text-white font-semibold text-sm md:text-lg items-center gap-3 rounded-full">
                  <div> Delivered on : </div>
                  <div className="flex justify-center items-center text-gray-400 gap-3">
                    {format(
                      typeof order.deliveredDate === "string"
                        ? new Date(order.deliveredDate)
                        : new Date(order.deliveredDate?.seconds * 1000),
                      "dd MMM yyyy, hh:mm a"
                    )}
                  </div>
                </div>
              )}
              {order.cancelledDate && (
                <div className="flex  justify-start md:justify-center w-full md:w-fit text-white font-semibold text-sm md:text-lg items-center gap-3 rounded-full">
                  <div> Cancelled on : </div>
                  <div className="flex justify-center items-center text-gray-400 gap-3">
                    {format(
                      typeof order.cancelledDate === "string"
                        ? new Date(order.cancelledDate)
                        : new Date(order.cancelledDate?.seconds * 1000),
                      "dd MMM yyyy, hh:mm a"
                    )}
                  </div>
                </div>
              )}

              </div>
            </div>
            <div className="orderdetails bg-Adark1 md:row-span-2 overflow-hidden  rounded-2xl">
              <div className={`container w-full h-full flex flex-col  p-3 gap-1 overflow-auto justify-start items-start`}>
              <Item title="Placed By" value={order.userName.toUpperCase()} />
              <Item title="User Id" value={order.userId} />
              <Item title="Phone No." value={order.userPhone} />
              <Item title="Email" value={order.userEmail} />
              <Item title="Address" value={order.houseNo+", "+order.area+", "+order.district} />
              <Item title="PinCode" value={order.pincode} />
              <Item title="State" value={order.state} />
              </div>
            </div>
            {!order.isCancelled ? (
              <div className={`bg-Adark1 md:col-span-2 py-3 flex flex-col md:flex-row justify-center gap-3 md:gap-0 md:justify-evenly items-center rounded-2xl `}>
                <Shipped setLoader={setLoader} order={order} />
                <Delivered setLoader={setLoader} order={order} />
              </div>
            ): (
              <div className={`bg-Adark1 md:col-span-2 py-3 flex flex-col md:flex-row justify-center gap-3 md:gap-0 md:justify-evenly items-center rounded-2xl `}>
                <InitiateRefund setLoader={setLoader} order={order}/>
                <Refunded setLoader={setLoader} order={order}/>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderInfo;
