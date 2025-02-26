import React from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
const Orders = ({ orders }) => {
  const Navigate = useNavigate();
  return (
    <div className="overflow-x-auto w-full h-full">
      <table className="w-full border border-gray-200 rounded-lg">
        <thead className="sticky bg-white top-0 shadow-sm text-gray-600 uppercase text-sm">
          <tr className="hidden md:table-row">
            <th className="px-4 py-2">S No.</th>
            <th className="px-4 py-2">Order ID</th>
            <th className="px-4 py-2">Qty</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Status</th>
          </tr>
          <tr className="md:hidden table-row">
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? (
            orders.reverse().map((order, index) => (
              <tr
                key={index}
                onClick={() => Navigate(`/myOrders/${order.id}`)}
                className="text-center cursor-pointer hover:bg-unactive text-lg font-semibold border-t"
              >
                <td className="hidden md:table-cell px-4 py-2">{index + 1}</td>
                <td className="hidden md:table-cell px-4 py-2">{order.id}</td>
                <td className="hidden md:table-cell px-4 py-2">
                  {order.quantity}kg
                </td>
                <td className="hidden md:table-cell px-4 py-2">
                &#8377;{order.totalprice}
                </td>
                <td className="px-4 py-2">
                  {order.orderDate
                    ? format(
                        typeof order.orderDate === "string"
                          ? new Date(order.orderDate) // If stored as an ISO string
                          : new Date(order.orderDate?.seconds * 1000), // If stored as Firebase Timestamp
                        "dd MMM yyyy"
                      )
                    : "N/A"}
                </td>
                <td className="px-4 py-2">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-xs ${
                      order.status === "placed"
                        ? "bg-yellow-500"
                        : order.status === "shipped"
                        ? "bg-blue-500"
                        : order.status === "cancelled"
                        ? "bg-red-500"
                        : "bg-green-500"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="5"
                className="px-4 py-4 text-center text-gray-500"
              ></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
