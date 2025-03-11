import React from "react";
import Block from "./Block";
import { format } from "date-fns";
import {
  cpy,
  dashboard,
  dashboard2,
  exit,
  Logo,
  orders1,
  orders2,
  transaction1,
  transaction2,
  users1,
  users2,
} from "../../../../assets/Images/Images";
function DashBoard({ orders, users }) {
  const revenue = orders?.reduce(
    (sum, order) => sum + ((Number(order?.totalprice) || 0) + (Number(order?.shippingCost) || 0)),
    0
  );
  
  return (
    <div className="w-full max-h-[30rem] h-full gap-5 flex flex-col justify-center items-center">
      <div className="w-full flex flex-col gap-1 justify-center items-start">
        <h1 className="text-3xl font-extrabold text-Aunactive">DashBoard</h1>
        <div className="w-full h-full rounded-3xl flex flex-wrap md:flex-nowrap justify-center items-center gap-3">
          <Block
            content={`₹${revenue}`}
            title="Total Revenue"
            logo={transaction2}
          />
          <Block content={orders.length} title="Total Orders" logo={orders2} />
          <Block content={users.length} title="Total Users" logo={users2} />
          <Block
            content={orders.length}
            title="Total Transactions"
            logo={transaction2}
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-1 justify-center items-start h-fit">
        <h1 className="text-3xl font-extrabold text-Aunactive">
          Recent Orders
        </h1>
        <div className="w-full h-full rounded-3xl overflow-hidden bg-Aunactive">
          <div className="overflow-auto h-full">
           <table className="w-full rounded-3xl border-[1px] border-Aunactive">
                       <thead className="sticky top-0 shadow-md text-Adark1 bg-Aunactive uppercase text-bold text-base md:text-lg">
                         <tr className="hidden md:table-row">
                           <th className="px-4 py-2">S No.</th>
                           <th className="px-4 py-2">Order ID</th>
                           <th className="px-4 py-2">Placed By</th>
                           <th className="px-4 py-2">Price</th>
                           <th className="px-4 py-2">Date</th>
                           <th className="px-4 py-2">Status</th>
                         </tr>
                         <tr className="md:hidden table-row">
                           <th className="px-4 py-2">Placed By</th>
                           <th className="px-4 py-2">Price</th>
                           <th className="px-4 py-2">Date</th>
                         </tr>
                       </thead>
                       <tbody>
                         {orders.length > 0 &&
                           orders.slice(0,4).map((order, index) => (
                             <tr
                               key={index}
                               className="text-center cursor-pointer hover:bg-Adark1 hover:text-white text-base md:text-lg font-semibold border-b border-gray-500"
                             >
                               <td className="hidden md:table-cell px-4 py-2">
                                 {index + 1}
                               </td>
                               <td className="hidden md:table-cell px-4 py-2">
                                 <div className="w-full h-full flex justify-center items-center gap-2">
                                   <span className="block md:hidden">
                                     {order.id.length > 3
                                       ? order.id.slice(0, 3) + " ..."
                                       : order.id}
                                   </span>
                                   <span className="hidden md:block">
                                     {order.id.length > 10
                                       ? order.id.slice(0, 10) + " ..."
                                       : order.id}
                                   </span>
                                   <img
                                     onClick={() =>
                                       navigator.clipboard.writeText(order.id)
                                     }
                                     className="w-4 cursor-pointer hover:scale-105 transition-all"
                                     src={cpy}
                                   ></img>
                                 </div>
                               </td>
                               <td className=" px-4 py-2">
                                 {order.userName}
                               </td>
                               <td className=" px-4 py-2">
                                 &#8377;{(Number(order?.totalprice) || 0) + (Number(order?.shippingCost) || 0)}
                               </td>
                               <td className="px-4 py-2">
                                 {order.orderDate
                                   ? format(
                                       typeof order.orderDate === "string"
                                         ? new Date(order.orderDate)
                                         : new Date(order.orderDate?.seconds * 1000),
                                       "dd MMM yyyy"
                                     )
                                   : "N/A"}
                               </td>
                               <td className="hidden md:table-cell px-4 py-2">
                                 <span
                                   className={`px-3 py-1 rounded-full text-white text-sm ${
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
                           ))}
                       </tbody>
                     </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
