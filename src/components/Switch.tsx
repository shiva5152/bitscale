"use client"; // client side component
import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div className="flex items-center gap-1">
      <div
        onClick={toggleSwitch}
        className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer ${
          isOn ? "bg-green-500" : "bg-gray-400"
        }`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${
            isOn ? "translate-x-[18px]" : "translate-x-[-1px]"
          }`}
        ></div>
      </div>
      <p className={`${isOn ? "text-green-500" : "text-gray-400"}`}>
        Auto Save
      </p>
    </div>
  );
};

export default ToggleSwitch;
