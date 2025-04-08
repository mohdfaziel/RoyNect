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
import { addItem } from "../../Store/Cart/CartSlice";
import Buy from "./Buy";
import BuyPhone from "./BuyPhone";
import Quantity from "./Quantity";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SEO from "../../components/SEO/SEO";

export default function Main() {
  const dispatch = useDispatch();
  const [weight, setWeight] = useState(0.5);
  const [price, setPrice] = useState(750);
  const [id, setId] = useState(1);
  const [qty, setQty] = useState(1);
  function addToCart() {
    console.log("Item Added to Cart");
    dispatch(addItem({ id, qty, price, weight }));
    setQty(1);
  }

  // Product data for structured data
  const productData = {
    name: `RoyNect Pure Apis Cerana Honey - ${weight}kg`,
    description: "100% pure and natural Apis Cerana honey from Bhadarwah, Kashmir. Golden, raw, and unfiltered honey preserving its natural goodness. Harvested directly from our hives in the pristine valleys of Kashmir.",
    image: mainImg2,
    price: price.toString()
  };

  // Breadcrumbs for structured data
  const breadcrumbs = [
    { name: "Home", url: "https://roynect.vercel.app/" },
    { name: "Products", url: "https://roynect.vercel.app/product" }
  ];

  return (
    <>
      <SEO 
        title="Products"
        description="Shop our premium 100% pure and natural Apis Cerana honey from Bhadarwah, Kashmir. Available in 0.5kg, 1kg, and 2kg sizes. Golden, raw, and unfiltered honey harvested directly from our hives in the pristine valleys of Kashmir."
        keywords="pure honey, natural honey, Kashmiri honey, Apis cerana honey, organic honey online, Bhadarwah honey, raw honey, unfiltered honey, premium honey, RoyNect honey"
        productData={productData}
        breadcrumbs={breadcrumbs}
        ogImage={mainImg2}
      />
      <div
        id="product"
        className="w-full bg-[url(/bg.svg)] bg-cover bg-top max-w-[102rem] md:max-h-[50rem] md:min-h-[45rem]  overflow-x-hidden md:overflow-hidden md:pb-7 md:px-[3rem] h-screen flex flex-col justify-between gap-1 md:justify-start  items-center"
      >
        <div className="upper relative z-10 md:relative h-full md:h-screen flex flex-col md:flex-row md:justify-between justify-center mt-[1rem] md:mt-[8rem] md:items-start items-center w-full">
          <motion.div
            variants={fadeIn("", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="Product md:flex hidden transition-all flex-col justify-center w-96 gap-0 items-start"
          >
            <h1 className="desc text-7xl text-slate-900 font-hotSlice font-medium z-20">
              100% Pure & Natural Apis Cerana Honey
            </h1>
            <div className="quantity text-lg">{weight}kg</div>
          </motion.div>
          <div className="Image animate-float md:animate-none md:absolute w-[24rem] md:w-[50rem] md:-top-[6rem] md:left-1/2 md:transform md:-translate-x-1/2 ">
            <LazyLoadImage
              src={mainImg2}
              effect="blur"
              className="lazy-load-image w-[100%] md:block hidden -z-10"
              alt="RoyNect Pure Apis Cerana Honey Jar - Premium Kashmiri Honey from Bhadarwah"
            />
            <LazyLoadImage
              src={jar3}
              effect="blur"
              className="lazy-load-image w-[100%] md:hidden -z-10"
              alt="RoyNect Pure Apis Cerana Honey Jar - Premium Kashmiri Honey from Bhadarwah"
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
              <img src={attention} loading="lazy" className="w-4 md:w-6" alt="Attention icon - 100% Natural Pure Honey" />
              <p className="text-xs md:text-sm font-semibold">
                100% Natural. Always Pure
              </p>
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
            or as a wholesome treat, it's the sweetness you can trust.
          </motion.p>
          <div className="price flex justify-center items-center">
            <h1 className="text-6xl font-extrabold">{price}</h1>
            <img src={rupee} loading="lazy" className="w-16" alt="Indian Rupee symbol" />
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
    </>
  );
}
