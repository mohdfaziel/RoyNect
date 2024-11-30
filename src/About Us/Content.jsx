import { bees1, bees2, dadu, me } from "../assets/Images/Images";
import { motion } from "framer-motion";
import fadeIn from "../Framer/Fadein";
export default function Content({ img, title, sentence, flag }) {
  return (
    <div
      className={`w-full flex md:h-[25rem] flex-col md:flex-row gap-5 md:gap-0 ${
        flag ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <motion.h1
        variants={fadeIn("", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className=" md:hidden text-4xl md:text-5xl font-extrabold text-center text-white"
      >
        {title}
      </motion.h1>
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="img flex justify-center items-center w-full md:w-[50%] h-full"
      >
        <div className="w-[30rem] rounded-3xl overflow-hidden h-[12rem] md:h-[20rem]">
          <img
            src={img}
            className="object-cover object-[center] w-[100%] h-[100%] top-4"
            alt=""
          />
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="info w-full md:w-[50%] flex justify-center items-center h-full"
      >
        <div className="flex flex-col justify-center w-[30rem] gap-3 items-center">
          <h1 className="md:block hidden text-5xl font-extrabold text-center text-white">
            {title}
          </h1>
          <p className="text-lg font-medium text-justify">{sentence}</p>
        </div>
      </motion.div>
    </div>
  );
}
