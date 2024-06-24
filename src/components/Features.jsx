import React from "react";
import twentyFourSupp from "../assets/24 supp.png";
import community from "../assets/community.png";
import liveInteraction from "../assets/live intreaction.png";
import profitability from "../assets/profitabilty.png";

const Features = () => {
  const features = [
    { name: "24/7 Support", icon: twentyFourSupp },
    { name: "1000+ People Community", icon: community },
    { name: "Live Interaction", icon: liveInteraction },
    { name: "Profitability", icon: profitability },
  ];

  return (
    <div className="max-w-screen-lg mx-auto p-4 mb-10 mt-2 h-[350px] ">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-100">
        Features
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={feature.icon}
              alt={feature.name}
              className="w-16 h-16 mb-2"
            />
            <span className="text-gray-200 text-center">{feature.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
