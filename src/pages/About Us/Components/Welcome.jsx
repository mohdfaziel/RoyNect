import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import { motion } from "framer-motion";
import fadeIn from "../../../Framer/Fadein.js";
import {
  ajar1,
  comb,
  leaf,
  mountain,
  stick,
  whtbee,
} from "../../../assets/Images/Images";

function Welcome() {
  const Navigate = useNavigate();
  const cards = [
    //left sides
    {
      logo: leaf,
      title: "Nature’s Finest Gift",
      desc: "Harvested with care to preserve purity and natural goodness.",
      className: "top-[15%] left-32 -rotate-6",
      fade: "right",
    },
    {
      logo: stick,
      title: "Tradition in Every Jar",
      desc: "Reflecting generations of beekeeping expertise from Bhadarwah.",
      className: "top-[46%] -left-2 -rotate-12",
      fade: "right",
    },
    {
      logo: mountain,
      title: "A Taste of Kashmir’s Legacy",
      desc: "Bringing you the authentic flavors of the Himalayas. ",
      className: "bottom-[5%] left-[10%] rotate-6",
      fade: "right",
    },
    //right
    {
      logo: ajar1,
      title: "Unfiltered & Unprocessed",
      desc: "Bringing you honey in its most natural and raw form.",
      className: "top-[15%] right-32 rotate-6",
      fade: "left",
    },
    {
      logo: comb,
      title: "Pioneers of Purity",
      desc: "Ensuring unadulterated, natural honey for your health. ",
      className: "top-[46%] -right-2 rotate-12",
      fade: "left",
    },
    {
      logo: whtbee,
      title: "Crafted by Experts",
      desc: "With years of expertise, we ensure honey that meets the highest standards. ",
      className: "bottom-[5%] right-[10%] -rotate-6",
      fade: "left",
    },
  ];
  return (
    <motion.div
      variants={fadeIn(" ", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      className="relative w-full px-[1rem] text-center bg-[url(/bg.svg)] bg-cover bg-top h-screen flex flex-col gap-8 md:gap-14 justify-center items-center"
    >
      <div className="flex z-10 flex-col gap-3 w-full justify-center items-center">
        <h1 className="text-6xl md:text-8xl drop-shadow-md font-extrabold text-white">
          Honey that <br />
          Speaks Tradition.
        </h1>
        <p className="text-base md:text-lg text-gray-800 font-semibold">
          Experience the essence of nature with our 100% pure honey, crafted
          with care and passion.
        </p>
      </div>
      <div className="flex z-10 flex-col justify-center items-center gap-3">
        <button
          onClick={() => Navigate("product")}
          className="bg-white w-fit shadow-md hover:bg-main border-[1px] hover:border-white transition-all hover:scale-105 text-sm md:text-2xl font-semibold text-slate-900 px-8 md:px-10 py-4 md:py-4 rounded-full"
        >
          Shop Now
        </button>
        <p className="text-xs md:text-sm text-slate-900 font-semibold">
          Order Now and Taste the Purity in Every Drop!
        </p>
      </div>
      {cards.map((card, key) => (
        <Card
          key={key}
          logo={card.logo}
          title={card.title}
          desc={card.desc}
          className={card.className}
          fade={card.fade}
        />
      ))}
    </motion.div>
  );
}

export default Welcome;
