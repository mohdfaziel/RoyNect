import React from "react";
import { format } from "date-fns";
import Dot from "./Dot";
function StatusBar({ orderDetails }) {
  const currStatus = orderDetails.status;
  const isCancelled = orderDetails.isCancelled;
  const statusArr = ["placed", "shipped", "delivered", "cancelled"];
  const statusIndex = statusArr.indexOf(currStatus.toLowerCase());
  console.log(statusIndex);
  return (
    <div className="flex border-l-[3px] border-gray-300 flex-col justify-center items-start gap-4">
      <div className="relative">
        <div
          className={`placed pl-3 ${
            statusIndex >= 0 ? "opacity-100" : "opacity-50"
          }`}
        >
          <h1 className="text-lg w-full font-semibold">Placed</h1>
          <p className="text-sm text-gray-500 w-full font-semibold">
            {orderDetails.orderDate
              ? format(
                  new Date(orderDetails.orderDate.seconds * 1000),
                  "dd MMM yyyy"
                )
              : "N/A"}
          </p>
        </div>
        <Dot active={statusIndex >= 0} />
      </div>
      <div className="relative">
        <div
          className={`shipped pl-3 ${
            isCancelled
              ? "opacity-30"
              : statusIndex >= 1
              ? "opacity-100"
              : "opacity-30"
          }`}
        >
          <h1 className="text-lg w-full font-semibold">Shipped</h1>
          <p className="text-sm text-gray-500 w-full font-semibold">
            {orderDetails.shippedDate
              ? format(
                  new Date(orderDetails.shippedDate.seconds * 1000),
                  "dd MMM yyyy"
                )
              : "N/A"}
          </p>
        </div>
        <Dot
          active={!isCancelled && statusIndex >= 1}
        />
      </div>
      <div className="relative">
        <div
          className={`delivered relative pl-3  ${
            isCancelled
              ? "opacity-30"
              : statusIndex >= 2
              ? "opacity-100"
              : "opacity-30"
          }`}
        >
          <h1 className="text-lg w-full font-semibold">Delivered</h1>
          <p className="text-sm text-gray-500 w-full font-semibold">
            {orderDetails.deliveredDate
              ? format(
                  new Date(orderDetails.deliveredDate.seconds * 1000),
                  "dd MMM yyyy"
                )
              : "N/A"}
          </p>
        </div>
        <Dot
          active={!isCancelled && statusIndex >= 2}
        />
      </div>
      {isCancelled && (
        <div className={`cancelled relative pl-3`}>
          <h1 className="text-lg w-full font-semibold">Cancelled</h1>
          <p className="text-sm text-gray-500 w-full font-semibold">
            {orderDetails.cancelledDate
              ? format(
                  new Date(orderDetails.cancelledDate.seconds * 1000),
                  "dd MMM yyyy"
                )
              : " "}
          </p>
          <Dot active={true} />
        </div>
      )}
    </div>
  );
}

export default StatusBar;
