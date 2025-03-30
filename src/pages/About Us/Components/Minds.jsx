import React from "react";
import { motion } from "framer-motion";
import fadeIn from "../../../Framer/Fadein.js";
import {
  email,
  faziel2,
  ig,
  lkdn,
  me,
  sp,
  whatsapp,
} from "../../../assets/Images/Images";
import Social from "../Social";

function Minds() {
  return (
    <div className="relative w-full min-h-screen flex mt-[3rem] md:mt-0 justify-center items-center px-[1rem] md:px-[10rem]">
      <div className="container z-10 w-full flex flex-col gap-5 justify-center items-start">
        <div className="flex flex-col gap-2">
          <motion.h1
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className=" text-4xl md:text-5xl font-extrabold text-white"
          >
            Minds Behind RoyNect
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="text-sm font-semibold"
          >
            Meet the passionate individuals behind RoyNect
          </motion.p>
        </div>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="grid bg-white shadow-md gap-10 p-5 md:p-10 rounded-xl text-justify grid-cols-1 md:grid-cols-2"
        >
          <div className="card1 flex flex-col md:flex-row justify-start items-start gap-5 md:gap-0">
            <div className="left w-full h-full">
              <div className="flex justify-center items-center w-full md:w-[15rem] rounded-lg overflow-hidden h-[15rem]">
                <img src={me} className="object-cover w-full h-full"></img>
              </div>
            </div>
            <div className="right flex flex-col gap-5">
              <div>
                <h1 className=" text-lg font-bold text-slate-800">
                  Khaleek-UL-Rehman
                </h1>
                <p className="text-xs font-semibold">BeeKeeper</p>
              </div>
              <h1 className="font-semibold text-sm">
                Khaleek is dedicated to nurturing our bees and ensuring the
                highest quality honey.
              </h1>
              <div className="flex justify-start items-center gap-3">
                <Social
                  icon={ig}
                  link="https://www.instagram.com/dawood__beekeeper?igsh=MTd2YnI1MWpjZDFrMQ=="
                />
                <Social
                  icon={email}
                  link="mailto:khaleek.ul92@gmail.com?subject=Inquiry%20About%20Honey&body=Hello%2C%20Dawood%20Ahmed%20Sheikh%21%20I%E2%80%99m%20interested%20in%20purchasing%20your%20honey."
                />
                <Social
                  icon={whatsapp}
                  link="https://wa.me/8492000445?text=Hello,%20Dawood%20Ahmed%20Sheikh!%20I%E2%80%99m%20interested%20in%20purchasing%20your%20honey."
                />
              </div>
            </div>
          </div>
          <div className="card2 flex flex-col md:flex-row justify-start items-start gap-5 md:gap-0">
            <div className="left w-full h-full">
              <div className="flex justify-center items-center w-full md:w-[15rem] rounded-lg overflow-hidden h-[15rem]">
                <img src={faziel2} className="object-cover w-full h-full"></img>
              </div>
            </div>
            <div className="right flex flex-col gap-5">
              <div>
                <h1 className=" text-lg font-bold text-slate-800">
                  Mohd Faziel
                </h1>
                <p className="text-xs font-semibold">Web Developer</p>
              </div>
              <h1 className="font-semibold text-sm">
                Faziel brings our vision to life through innovative web
                solutions and management.
              </h1>
              <div className="flex justify-start items-center gap-3">
                <Social
                  icon={ig}
                  link="https://www.instagram.com/heyy.faziel?igsh=MWQxdW1yNDJ5ZGVicA=="
                />
                <Social
                  icon={email}
                  link="mailto:mohdfazel969@gmail.com?subject=Inquiry%20About%20Honey&body=Hello%2C%Mohd%Faziel%20Sheikh%21%20I%E2%80%99m%20interested%20in%20purchasing%20your%20honey."
                />
                <Social
                  icon={lkdn}
                  link="https://www.linkedin.com/in/mohdfaziel/"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <img
        className="absolute w-[40rem] hidden md:block -top-[2rem] -right-[20rem]"
        src={sp}
      ></img>
      <img
        className="absolute w-[20rem] -top-[3rem] md:top-[30rem] -right-[10rem] md:-left-[5rem]"
        src={sp}
      ></img>
    </div>
  );
}

export default Minds;
