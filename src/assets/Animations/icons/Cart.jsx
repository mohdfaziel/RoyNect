import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "./cart.json";

const Cart = () => {
  return (
    <div className="flex  w-[20px] h-[20px] md:h-[28px] md:w-[28px] justify-center items-center">
      <Player
        autoplay
        loop
        src={animationData}
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
};

export default Cart;
