import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../assets/Animations/orderPlaced.json";

const OrderPlaced = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Player
        autoplay
        loop
        src={animationData}
        style={{ height: "300px", width: "300px" }}
      />
    </div>
  );
};

export default OrderPlaced;
