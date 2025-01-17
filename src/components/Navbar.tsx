import React from "react"; //server component
import Image from "next/image";
import ToggleSwitch from "./Switch";

const Navbar = () => {
  return (
    <nav className="border-gray-200 border-b-2 p-2 h-[56px] flex justify-between">
      <div className="flex gap-4 items-center">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </div>
        <p> Name of the file</p>
      </div>
      <div className="flex gap-6 items-center">
        <div>
          {/* using client component as leaf component with ultimately 
          make our navbar server component */}
          <ToggleSwitch />
        </div>
        <div>
          <Image
            height={30}
            width={30}
            alt="user avatar"
            src={"/images/avatar.png"}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
