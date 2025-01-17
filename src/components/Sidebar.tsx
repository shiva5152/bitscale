import React from "react";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="max-md:hidden border-gray-200 border-e-2 min-w-[56px] h-full flex flex-col items-center justify-between p-3">
      <div className="flex flex-col gap-5 mt-3">
        {tabs.slice(0, 3).map((tab, index) => (
          <div key={`tab1-${index}`} className="relative cursor-pointer group">
            <Image height={20} width={20} alt={tab.title} src={tab.src} />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-5 mb-3">
        {tabs.slice(3).map((tab, index) => (
          <div key={`tab2-${index}`} className="relative cursor-pointer group">
            <Image height={20} width={20} alt={tab.title} src={tab.src} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

const tabs = [
  {
    title: "table",
    src: "/images/table.png",
  },
  {
    title: "puzzle",
    src: "/images/puzzle-piece-01.png",
  },
  {
    title: "circle",
    src: "/images/intersect-circle.png",
  },
  {
    title: "credit",
    src: "/images/credit-card-02.png",
  },
  {
    title: "stack",
    src: "/images/coins-stacked-01.png",
  },
];
