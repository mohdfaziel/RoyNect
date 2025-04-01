import React, { useState } from 'react';
import toast from 'react-hot-toast';
import databaseService from '../../../../Firebase/Services/database';
import { paymentStatusUpdate } from '../../../../Mailer/EmailSenderUser';
import { paymentStatusUpdated } from '../../../../Mailer/EmailSenderAdmin';
function Refunded({ setLoader, order }) {
    const [check, setCheck] = useState(Boolean(order.refunded));
    async function handleCheck(e) {
        if (check){
          toast.error("Can't Undo Action");
          return;
        }
        setLoader(true);
        try {
            setCheck(true);
            await databaseService.updateAttribute(order.id, "refunded", true);
            await databaseService.updateAttribute(order.id, "paymentStatus", "Refunded");
            const updatedOrderData = await databaseService.getOrder(order.id);
            paymentStatusUpdate(updatedOrderData); // Send payment refunded email to user
            paymentStatusUpdated(updatedOrderData); // Send payment refunded email to admin
            setLoader(false);
            toast.success("Refund Complete For the Order");
            await new Promise(resolve => setTimeout(resolve, 1000));
            toast.success("Refresh the Page to see changes");
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div className='flex justify-center items-center gap-3 bg-Aunactive text-white px-4 py-2 rounded-full'>
            <label htmlFor="myCheckbox" className="md:text-lg text-base font-medium cursor-pointer">
                Order Refunded
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

export default Refunded;
