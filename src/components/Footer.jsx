import React from "react";
import { brand, Logo, whtbee } from "../assets/Images/Images";
import { useNavigate } from "react-router-dom";
function Footer() {
const Navigate = useNavigate();
function policies()
{
    window.scrollTo({ top: 0, behavior: "smooth" });
    Navigate("/policies");
}
  return (
    <div className="w-full flex transition-all text-sm md:text-base flex-col gap-5 md:gap-10 min-h-[5rem] font-semibold text-gray-300 px-3 md:px-[10rem] py-10 bg-slate-950 bg-radial-gradient-footer">
      <div className="Policies flex flex-col md:flex-row border-b-[1px] pb-5 md:pb-10 border-slate-500 gap-4 md:gap-0 md:justify-between w-full items-start md:items-center">
        <div className="Logo flex md:flex-col w-full md:w-fit justify-center gap-2 md:items-start items-center">
          <div className="px-4 py-2 md:px-6 md:py-2 w-20 md:w-32 rounded-full bg-white">
            <img
              className="w-full h-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
              src={brand}
            ></img>
          </div>
          <h1 className="md:text-center text-base w-full md:text-xl">
            We sell 100% Pure and Natural Honey
          </h1>
        </div>
        <div className="policies flex flex-col md:flex-row justify-center md:items-center gap-3 md:gap-4">
          <p onClick={policies} className="cursor-pointer hover:text-white">Terms and Conditions</p>
          <p onClick={policies} className="cursor-pointer hover:text-white">Privacy Policy</p>
          <p onClick={policies} className="cursor-pointer hover:text-white">Refund & Cancellation</p>
          <p onClick={policies} className="cursor-pointer hover:text-white">Contact Us</p>
        </div>
      </div>
      <div className="Contact us flex flex-col gap-1 border-b-[1px] pb-5 md:pb-10 border-slate-500">
        <h1>
          Email:{" "}
          <a className="hover:text-white transition-all"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mohdfazel969@gmail.com&su=Customer%20Query&body=Hello%20Dawood%20Beekeeper,%20I%20have%20a%20query."
            target="_blank"
          >
            mohdfazel969@gmail.com
          </a>
        </h1>
        <h1>Phone: +91 7006205934</h1>
        <h1>Address: Bhadarwah, Jammu and Kashmir, 182222</h1>
      </div>
      <div className="Promotion text-center">
        &copy;{" "}
        <a
          className="hover:text-white"
          href="https://www.faziel.me/"
          target="_blank"
        >
          Mohd Faziel.
        </a>{" "}
        All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;
