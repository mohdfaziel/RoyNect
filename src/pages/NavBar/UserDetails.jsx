import React from "react";
import { useDispatch, useSelector } from "react-redux";
import authService from "../../Firebase/Services/auth";
import {useNavigate } from "react-router-dom";
import { ggle } from "../../assets/Images/Images";

function UserDetails({ status, setStatus }) {
  const userPresent = useSelector((state) => state.user.status);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  async function signIn() {
    await authService.signInWithGoogle(dispatch);
  }
  async function signOut() {
    await authService.signOut(dispatch);
    Navigate("/")
  }
  return (
    <div
      onClick={setStatus}
      className={`${
        status ? "flex" : "hidden"
      } flex transition-all absolute  w-[8rem] md:w-[9rem] top-10 md:top-14 -left-12 rounded-md flex-col py-1 bg-unactive shadow-md justify-center items-center`}
    >
      <ul className="flex flex-col gap-2 w-full min-h-[5rem] justify-center items-center">
        {userPresent && (
          <li onClick={()=> Navigate('/myOrders')} className="px-4 transition-all py-1 cursor-pointer  font-medium hover:bg-slate-300 rounded-full">
            My Orders
          </li>
        )}
        {!userPresent && (
          <div className="flex flex-col justify-center items-center gap-1">
            <img className="w-6" src={ggle} />
            <li
              onClick={signIn}
              className="px-4 cursor-pointer  transition-all py-1 font-medium hover:bg-slate-300 rounded-full"
            >
              Sign In
            </li>
          </div>
        )}
        {userPresent && (
          <li
            onClick={signOut}
            className="px-4 cursor-pointer transition-all py-1 font-medium hover:bg-slate-300 rounded-full"
          >
            Sign Out
          </li>
        )}
      </ul>
    </div>
  );
}

export default UserDetails;
