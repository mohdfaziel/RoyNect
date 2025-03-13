import React from "react";

const Splash = ({ title }) => {
  const colorMap = {
    Paid: "#22c55e",
    "Refund Initiated": "#facc15",
    Refunded: "#a855f7",
  };

  const splashColor = colorMap[title] || "#64748b";

  return (
    <div
      className="relative flex items-center justify-center px-2 py-1 rounded-full"
      style={{ backgroundColor: splashColor }}
    >
      <h2 className="text-white text-xs font-bold text-center">
        {title}
      </h2>
    </div>
  );
};

export default Splash;
