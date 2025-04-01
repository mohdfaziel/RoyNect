import React, { useState } from 'react';
import toast from 'react-hot-toast';
import databaseService from '../../../../Firebase/Services/database';
import { orderStatusUpdate } from '../../../../Mailer/EmailSenderUser';
import { orderUpdated } from '../../../../Mailer/EmailSenderAdmin';

function Shipped({ setLoader, order }) {
    const [check, setCheck] = useState(Boolean(order.shippedDate));
    async function handleCheck(e) {
        if (check){
          toast.error("Can't Undo Action");
          return;
        }
        setLoader(true);
        try {
            setCheck(true);
            const date = new Date().toISOString();
            await databaseService.updateAttribute(order.id, "shippedDate", date);
            await databaseService.updateOrderStatus(order.id, "shipped");
            const updatedOrderData = await databaseService.getOrder(order.id);
            orderStatusUpdate(updatedOrderData); // Send order shipped email to user
            orderUpdated(updatedOrderData); // Send order shipped email to admin
            setLoader(false);
            toast.success("Order marked as shipped");
            await new Promise(resolve => setTimeout(resolve, 1000));
            toast.success("Refresh the Page to see changes");
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div className='flex justify-center items-center gap-3 bg-Aunactive text-white px-4 py-2 rounded-full'>
            <label htmlFor="myCheckbox" className="md:text-lg text-base font-medium cursor-pointer">
                isShipped
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

export default Shipped;
