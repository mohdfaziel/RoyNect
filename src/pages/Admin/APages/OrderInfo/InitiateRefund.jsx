import React, { useState } from 'react';
import toast from 'react-hot-toast';
import databaseService from '../../../../Firebase/Services/database';

function InitiateRefund({ setLoader, order }) {
    const [check, setCheck] = useState(Boolean(order.refundInitiated));
    async function handleCheck(e) {
        if (check){
          toast.error("Can't Undo Action");
          return;
        }
        setLoader(true);
        try {
            setCheck(true);
            await databaseService.updateAttribute(order.id, "refundInitiated", true);
            await databaseService.updateAttribute(order.id, "paymentStatus", "Refund Initiated");
            setLoader(false);
            toast.success("Refund Initiated For the Order");
            await new Promise(resolve => setTimeout(resolve, 1000));
            toast.success("Refresh the Page to see changes");
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div className='flex justify-center items-center gap-3 bg-Aunactive text-white px-4 py-2 rounded-full'>
            <label htmlFor="myCheckbox" className="md:text-lg text-base font-medium cursor-pointer">
                Initiate Refund
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

export default InitiateRefund;
