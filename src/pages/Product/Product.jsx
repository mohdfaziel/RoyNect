import {
  attention,
  jar3,
  mainImg2,
  minus,
  plus,
  rupee,
} from "../../assets/Images/Images";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import fadeIn from "../../Framer/Fadein";
import {useDispatch } from "react-redux";
import { addItem } from "../../Store/Cart/CartSlice";
import Buy from "./Buy";
import BuyPhone from "./BuyPhone";
import Quantity from "./Quantity";
import { useState } from "react";
export default function Main() {
  const [weight, setWeight] = useState(0.5);
  const [price, setPrice] = useState(750);
  const [id, setId] = useState(1);
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  function addToCart() {
    console.log("Item Added to Cart");
    dispatch(addItem({ id, qty, price, weight }));
    setQty(1);
  }
  return (
    <div
      id="product"
      className="w-full max-w-[102rem] md:max-h-[50rem] md:min-h-[45rem]  overflow-x-hidden md:overflow-hidden md:pb-7 md:px-[3rem] h-screen flex flex-col justify-between gap-1 md:justify-start  items-center"
    >
      <div className="upper relative z-10 md:relative h-full md:h-screen flex flex-col md:flex-row md:justify-between justify-center mt-[1rem] md:mt-[8rem] md:items-start items-center w-full">
        <motion.div
          variants={fadeIn("", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="Product md:flex hidden transition-all flex-col justify-center w-96 gap-3 items-start"
        >
          <h1 className="desc text-5xl font-extrabold z-20">
            100% Pure & Natural Apis Cerana Honey
          </h1>
          <div className="quantity text-lg">{weight}kg</div>
        </motion.div>
        <div className="Image animate-float md:animate-none md:absolute w-[24rem] md:w-[50rem] md:-top-[6rem] md:left-1/2 md:transform md:-translate-x-1/2 ">
          <LazyLoadImage
            src={mainImg2}
            effect="blur"
            className="lazy-load-image w-[100%] md:block hidden -z-10"
            alt=""
          />
          <LazyLoadImage
            src={jar3}
            effect="blur"
            className="lazy-load-image w-[100%] md:hidden -z-10"
            alt=""
          />
        </div>
        <motion.div
          variants={fadeIn("", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="Quantity z-20 flex flex-col justify-center items-center md:items-end gap-2"
        >
          <div className="flex justify-center items-center gap-3">
            <Quantity
              onClick={() => {
                setWeight(0.5);
                setPrice(750);
                setId(1);
              }}
              bg={weight === 0.5 ? "active" : "Dark3"}
              txt={weight === 0.5 ? "white" : "unactive"}
              weight=".5kg"
            />
            <Quantity
              onClick={() => {
                setWeight(1);
                setPrice(1500);
                setId(2);
              }}
              bg={weight === 1 ? "active" : "Dark3"}
              txt={weight === 1 ? "white" : "unactive"}
              weight="1kg"
            />
            <Quantity
              onClick={() => {
                setWeight(2);
                setPrice(3000);
                setId(3);
              }}
              bg={weight === 2 ? "active" : "Dark3"}
              txt={weight === 2 ? "white" : "unactive"}
              weight="2kg"
            />
          </div>
          <div className="Attention flex justify-center items-center gap-1">
            <img src={attention} loading="lazy" className="w-4 md:w-6" alt="" />
            <p className="text-xs md:text-sm font-semibold">100% Natural. Always Pure</p>
          </div>
        </motion.div>
        <div className="absolute -z-10 w-[30rem] h-[30rem] md:w-[40rem] md:h-[40rem] rounded-full blur-3xl opacity-40 bg-white md:-top-[6rem] md:left-[55%] md:transform md:-translate-x-1/2"></div>
      </div>
      <div className="lower md:flex hidden z-20 h-fit justify-between items-center w-full">
        <motion.p
          variants={fadeIn("", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="text-xl text-justify font-bold w-[30rem]"
        >
          Golden, raw, and unfiltered, our honey is harvested directly from our
          hives, preserving its natural goodness. Perfect for your tea, toast,
          or as a wholesome treat, it’s the sweetness you can trust.
        </motion.p>
        <div className="price flex justify-center items-center">
          <h1 className="text-6xl font-extrabold">{price}</h1>
          <img src={rupee} loading="lazy" className="w-16" alt="" />
        </div>
        <Buy onClick={addToCart} qty={qty} setQty={setQty} />
      </div>
      <BuyPhone
        onClick={addToCart}
        weight={weight}
        price={price}
        qty={qty}
        setQty={setQty}
      />
    </div>
  );
}
