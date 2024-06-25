import React from "react";
import Navbar from "./Navbar";
import bgImage from "../assets/images/Background.png";
import { MdSchool } from "react-icons/md"; // Import the school icon

const Home = () => {
  const handleButtonClick = () => {
    const plansSection = document.getElementById("plans");
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh", // Ensure full viewport height
      }}
    >
      <Navbar />
      <div className="max-w-[1024px] bg-transparent px-4 py-40 mx-auto h-[80vh]">
        <div className="flex flex-col max-w-[300px] lg:max-w-[600px] mx-auto p-5 text-white">
          <h1 className="text-left mb-5 lg:text-[80px] text-5xl italic sm:text-xl">
            Earn
          </h1>
          <h1 className="mx-auto lg:text-[80px] lg:mt-6 text-7xl italic text-purple-600 sm:text-5xl">
            Trade
          </h1>
          <h1 className="mx-auto lg:text-[80px] lg:mt-2 text-7xl italic sm:text-5xl">
            Invest
          </h1>
          <h1 className="text-right mt-5 lg:text-[80px] lg:mt-8 text-5xl italic sm:text-xl">
            Repeat
          </h1>
        </div>
        <div className="mt-5">
          <p className="max-w-[300px] lg:hidden text-white mx-auto text-center px-5 text-2xl sm:text-xl">
            we will teach you <br />
            how to master it
          </p>
          <p className="hidden lg:block max-w-[600px] mt-10 text-white mx-auto text-center px-5 text-2xl sm:text-xl">
            we will teach you how to master it
          </p>
        </div>
        <div className="flex justify-center mt-10">
          <button
            onClick={handleButtonClick}
            className="flex items-center justify-center h-14 w-[300px]  text-nowrap text-center p-1 italic text-2xl font-medium bg-purple-600 text-white rounded-2xl sm:text-xl"
          >
            <MdSchool className="h-8 w-8 mr-2" />
            Our Mentorship Plans
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
