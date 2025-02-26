import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../../assets/Animations/payment.json";

const Payment = () => {
  return (
    <div className="flex w-[23px] h-[23px] md:w-[32px] md:h-[32px] justify-center items-center">
      <Player
        autoplay
        loop
        src={animationData}
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
};

export default Payment;
