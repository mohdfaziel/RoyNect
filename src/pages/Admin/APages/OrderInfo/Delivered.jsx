import React, { useState } from "react";
import toast from "react-hot-toast";
import databaseService from "../../../../Firebase/Services/database";
import { orderStatusUpdate } from "../../../../Mailer/EmailSenderUser";
import { orderUpdated } from "../../../../Mailer/EmailSenderAdmin";
function Delivered({ setLoader, order }) {
  const [check, setCheck] = useState(Boolean(order.deliveredDate));
  async function handleCheck(e) {
    try {
      if (check) {
        toast.error("Can't Undo Action");
        return;
      }
      setLoader(true);
      const {status} = await databaseService.getOrder(order.id);
      if (status !== "shipped") {
        toast.error("Order is not shipped yet");
        setLoader(false);
        return;
      }
      setCheck(true);
      const date = new Date().toISOString();
      await databaseService.updateAttribute(order.id, "deliveredDate", date);
      await databaseService.updateOrderStatus(order.id, "delivered");
      const updatedOrderData = await databaseService.getOrder(order.id);
      orderStatusUpdate(updatedOrderData); // Send order delivered email to user
      orderUpdated(updatedOrderData); // Send order delivered email to admin
      setLoader(false);
      toast.success("Order marked as delivered");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Refresh the Page to see changes");
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div className="flex justify-center items-center gap-3  bg-Aunactive text-white px-4 py-2 rounded-full">
      <label
        htmlFor="myCheckbox"
        className="md:text-lg text-base font-medium cursor-pointer"
      >
        isDelivered
      </label>
      <input
        type="checkbox"
        id="myCheckbox"
        checked={check}
        onChange={handleCheck}
        className="w-5 h-5 cursor-pointer"
      />
    </div>
  );
}

export default Delivered;
