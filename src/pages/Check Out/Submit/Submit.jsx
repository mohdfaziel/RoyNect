import React from "react";
import Person from "../../../components/Animations/Person";
import Address from "../../../components/Animations/Address";
import { motion } from "framer-motion";
import fadeIn from "../../../Framer/Fadein.js";
import Summary from "./Summary";
import { useSelector } from "react-redux";
function Submit() {
  const contactDetails = useSelector((state) => state.order.orderDetails);
  const user = useSelector((state) => state.user.userData);
  return (
    <div className='className="container w-full  grid grid-cols-1 md:grid-cols-2 gap-5 bg-white p-2 md:p-5 rounded-3xl shadow-xl'>
      <motion.div
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="Contact-Details border-[2px] flex flex-col justify-center items-start gap-2 md:gap-4 border-gray-300 shadow-sm rounded-2xl p-2 md:p-4"
      >
        <div className="flex justify-start items-center">
          <Person />
          <h1 className="text-lg md:text-xl font-bold">Contact Details</h1>
        </div>
        <div className="flex text-base md:text-lg pl-2 md:pl-4 flex-col md:gap-2">
          <p className="  font-bold">
            Name :{" "}
            <span className="text-slate-700">{user ? user.name : ""}</span>
          </p>
          <p className="  font-bold">
            Phone No. :{" "}
            <span className="text-slate-700">
              {contactDetails ? contactDetails.phone : ""}
            </span>
          </p>
        </div>
      </motion.div>
      <Summary />
      <motion.div   variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}  className="Address border-[2px] flex flex-col justify-center items-start gap-2 md:gap-4 border-gray-300 shadow-sm rounded-2xl p-2 md:p-4">
        <div className="flex justify-start items-center">
          <Address />
          <h1 className="text-lg md:text-xl font-bold">Address</h1>
        </div>
        <div className="flex text-base md:text-lg pl-2 md:pl-4 flex-col md:gap-2">
          <p className="font-bold">
            {contactDetails
              ? contactDetails.houseNo + ", " + contactDetails.area
              : ""}
          </p>
          <p className="font-bold">
            District :{" "}
            <span className="text-slate-700">
              {contactDetails ? contactDetails.district : ""}
            </span>
          </p>
          <p className="font-bold">
            State :{" "}
            <span className="text-slate-700">
              {contactDetails ? contactDetails.state : ""}
            </span>
          </p>
          <p className="font-bold">
            Pincode :{" "}
            <span className="text-slate-700">
              {contactDetails ? contactDetails.pincode : ""}
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Submit;
