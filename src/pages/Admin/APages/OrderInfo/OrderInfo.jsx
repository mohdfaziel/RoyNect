import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Item from "./Item";

function OrderInfo({orders,selectedOrderId, setSelectedOrderId}) {
    const order = orders.find((order) => order.id === selectedOrderId);
  return (
     <div className="w-full max-h-[35rem] h-full gap-1 flex flex-col justify-center items-start">
          <h1 className="text-3xl font-extrabold  text-Aunactive">Order Details</h1>
          <div className="w-full h-full rounded-3xl overflow-hidden bg-Aunactive">
          <div className="w-full flex flex-wrap gap-3 justify-center border-[1px] border-Aunactive items-center p-5 h-full rounded-3xl overflow-auto bg-Aunactive">
          {Object.entries(order).map(([key, value]) => (
            <Item key={key} title={key} value={value} />
          ))}
          </div>
          </div>
        </div>
  );
}

export default OrderInfo;
