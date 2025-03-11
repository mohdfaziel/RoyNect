import React from 'react'
import { cpy } from '../../../assets/Images/Images'
import { format } from 'date-fns'
function Transactions({orders,users}) {
  return (
    <div className='w-full max-h-[40rem] h-full gap-1 flex flex-col justify-center items-start'>
      <h1 className="text-3xl font-extrabold text-Aunactive">Transactions</h1>
      <div className="w-full h-full rounded-3xl overflow-hidden bg-Aunactive">
                <div className="overflow-auto h-full">
                 <table className="w-full rounded-3xl border-[1px] border-Aunactive">
                             <thead className="sticky top-0 shadow-md text-Adark1 bg-Aunactive uppercase text-bold text-base md:text-lg">
                               <tr className="hidden md:table-row">
                                 <th className="px-4 py-2">S No.</th>
                                 <th className="px-4 py-2">Transaction ID</th>
                                 <th className="px-4 py-2">Order ID</th>
                                 <th className="px-4 py-2">Paid By</th>
                                 <th className="px-4 py-2">Price</th>
                                 <th className="px-4 py-2">Date</th>
                               </tr>
                               <tr className="md:hidden table-row">
                               <th className="px-4 py-2">Txn Id</th>
                                 <th className="px-4 py-2">Price</th>
                                 <th className="px-4 py-2">Date</th>
                               </tr>
                             </thead>
                             <tbody>
                               {orders.length > 0 &&
                                 orders.map((order, index) => (
                                   <tr
                                     key={index}
                                     className="text-center cursor-pointer hover:bg-Adark1 hover:text-white text-base md:text-lg font-semibold border-b border-gray-500"
                                   >
                                     <td className="hidden md:table-cell px-4 py-2">
                                       {index + 1}
                                     </td>
                                     <td className="px-4 py-2">
                                       <div className="w-full h-full flex justify-center items-center gap-2">
                                         <span className="block md:hidden">
                                           {order.paymentId.length > 3
                                             ? order.paymentId.slice(0, 3) + " ..."
                                             : order.paymentId}
                                         </span>
                                         <span className="hidden md:block">
                                           {order.paymentId.length > 10
                                             ? order.paymentId.slice(0, 10) + " ..."
                                             : order.paymentId}
                                         </span>
                                         <img
                                           onClick={() =>
                                             navigator.clipboard.writeText(order.paymentId)
                                           }
                                           className="w-4 cursor-pointer hover:scale-105 transition-all"
                                           src={cpy}
                                         ></img>
                                       </div>
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
                                     
                                     <td className="hidden md:table-cell px-4 py-2">
                                       {order.userName}
                                     </td>
                                     <td className=" px-4 py-2">
                                     {(Number(order?.totalprice) || 0) + (Number(order?.shippingCost) || 0)}
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
                                   </tr>
                                 ))}
                             </tbody>
                           </table>
                </div>
              </div>
    </div>
  )
}

export default Transactions
