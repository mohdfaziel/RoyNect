import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../assets/Animations/address.json";

const AddressBee = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Player
        autoplay
        loop
        src={animationData}
        style={{ height: "30px", width: "30px" }}
      />
    </div>
  );
};

export default AddressBee;
