import {
  bees1,
  bees2,
  dadu,
  jars,
  sp,
  kash,
  withbees,
} from "../../assets/Images/Images";
import Content from "./Content";
import { motion } from "framer-motion";
import fadeIn from "../../Framer/Fadein.js";

export default function Legacy() {
  const content = [
    {
      img: dadu,
      title: "A Legacy of Beekeeping",
      sentence:
        "The art of beekeeping was passed down to us by our grandfather, Abdul Gani Sheikh, a true pioneer in this field. His expertise and dedication laid the foundation for everything we do today.",
      flag: true,
    },
    {
      img: bees1,
      title: "Crafted by Nature",
      sentence:
        "With immense care and dedication, We extract honey directly from the hives, ensuring it remains untouched by artificial processes.",
      flag: false,
    },
    {
      img: withbees,
      title: "A Commitment to Quality",
      sentence:
        "Each year, We produce approximately 40-50 kilograms of honey. The process of extraction is carried out by Khaleek, ensuring that every drop is free from additives or impurities.",
      flag: true,
    },
    {
      img: jars,
      title: "Affordable Sweetness",
      sentence:
        "We ensure that my honey is sold at a reasonable price, making it an affordable yet premium choice.",
      flag: false,
    },
    {
      img: bees2,
      title: "Pure Goodness",
      sentence:
        "With every spoonful of our honey, you’ll taste the difference that comes from pure, natural ingredients.",
      flag: true,
    },
    {
      img: kash,
      title: "Taste of Tradition",
      sentence:
        "Our honey isn’t just a product, it’s the result of years of tradition, passion, and dedication. Treat yourself to a taste of tradition and enjoy the finest honey available.",
      flag: false,
    },
  ];
  return (
    <div className="relative w-full flex  flex-col justify-center mt-[3rem] md:mt-0 items-center py-[1rem] px-[1rem] md:px-[3rem] min-h-screen">
      <div className="container z-10 w-full min-h-screen flex flex-col gap-5 md:gap-7  justify-center items-center">
        <motion.h1
          variants={fadeIn("", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="text-white text-6xl font-hotSlice text-center md:text-8xl drop-shadow-md font-medium"
        >
          The Story Behind the Hive
        </motion.h1>
        {content.map((item, index) => (
          <Content
            key={index}
            img={item.img}
            title={item.title}
            sentence={item.sentence}
            flag={item.flag}
          />
        ))}
      </div>
     
      <img
        className="absolute w-[20rem] md:w-[30rem] top-[20rem] md:top-[10rem] -right-[8rem] md:-right-[14rem]"
        src={sp}
      ></img>
      <img
        className="absolute w-[20rem] md:w-[30rem] top-[42rem] md:top-[42rem] -left-[8rem] md:-left-[15rem]"
        src={sp}
      ></img>
       <img
        className="absolute w-[40rem] md:bottom-[70rem] -right-[10rem] md:-right-[15rem]"
        src={sp}
      ></img>
      <img
        className="absolute w-[20rem] bottom-[47rem] md:bottom-[50rem] -left-[10rem] md:left-[30rem]"
        src={sp}
      ></img>
       <img
        className="absolute w-[40rem] bottom-[0rem] md:-bottom-[10rem] -right-[10rem] md:-left-[15rem]"
        src={sp}
      ></img>
    </div>
  );
}
