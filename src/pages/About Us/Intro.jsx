import { email, ig, me, whatsapp } from "../../assets/Images/Images";
import { motion } from "framer-motion";
import fadeIn from "../../Framer/Fadein";
import Social from "./Social";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Intro() {
  return (
    <div
      id="about"
      className="flex flex-col md:flex-row justify-center md:px-[3rem] px-[1rem] py-[5rem] gap-5 md:gap-0 items-center w-full min-h-screen"
    >
      <motion.div
        variants={fadeIn("", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="img relative flex justify-center items-center w-full md:w-[50%] md:h-full"
      >
        <div className="md:w-[25rem] w-[16rem] z-20 border-[1px] border-main h-[16rem] md:h-[25rem] rounded-full overflow-hidden">
          <LazyLoadImage
            src={me}
            effect="blur"
            width="100%"
            height="100%"
            className="lazy-load-image w-full h-full object-cover object-[center]"
            alt=""
          />
        </div>
        <div className="absolute z-10 w-[20rem] h-[20rem] md:w-[40rem] md:h-[40rem] rounded-full blur-3xl opacity-40 bg-white "></div>
      </motion.div>
      <motion.div
        variants={fadeIn("", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="info z-20 flex flex-col justify-center items-start gap-5 w-full md:w-[50%] md:h-full"
      >
        <h1 className="text-5xl font-extrabold text-white">Who Am I ?</h1>
        <p className="text-lg font-medium text-justify">
          I am{" "}
          <span className="font-semibold text-white">Dawood Ahmed Sheikh</span>,
          a passionate beekeeper from the picturesque town of{" "}
          <span className="font-semibold text-white">Bhaderwah</span>.
          Beekeeping is more than a profession to me—it’s a tradition and a
          craft I’ve cherished since learning it from my grandfather. With
          dedication and care, I personally extract honey from my hives,
          ensuring that every jar is a reflection of purity and authenticity.
        </p>
        <div className="icons flex justify-center items-center md:items-start w-full md:w-fit gap-3">
          <Social icon={ig} link="https://www.instagram.com/dawood__beekeeper?igsh=MTd2YnI1MWpjZDFrMQ=="/>
          <Social icon={email} link="mailto:khaleek.ul92@gmail.com?subject=Inquiry%20About%20Honey&body=Hello%2C%20Dawood%20Ahmed%20Sheikh%21%20I%E2%80%99m%20interested%20in%20purchasing%20your%20honey."/>
          <Social icon={whatsapp} link="https://wa.me/8492000445?text=Hello,%20Dawood%20Ahmed%20Sheikh!%20I%E2%80%99m%20interested%20in%20purchasing%20your%20honey."/>
        </div>
      </motion.div>
    </div>
  );
}
