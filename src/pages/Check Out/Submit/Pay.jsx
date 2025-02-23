import React from "react";
import { useState } from "react";
function Pay() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="w-full p-2 md:p-4 flex flex-col gap-2 rounded-2xl md:rounded-2xl border-[2px] text-sm font-bold border-gray-300 shadow-sm">
      <label className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          className="w-4 h-4 accent-main cursor-pointer"
        />
        I accept the
        <a href="#" className="text-blue-600 ">
          {" "}
          Terms & Conditions
        </a>
        and
        <a href="#" className="text-blue-600 ">
          {" "}
          Privacy Policy
        </a>
      </label>
      <button
        className={`w-full py-2 text-white font-semibold rounded-lg transition-all bg-blue-600 ${
          isChecked ? "opacity-100" : "opacity-50 cursor-not-allowed"
        }`}
        disabled={!isChecked}
      >
        Pay Now
      </button>
    </div>
  );
}

export default Pay;
