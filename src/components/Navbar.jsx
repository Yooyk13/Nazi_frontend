import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div className="bg-transparent text-white py-7 absolute w-full">
      <div className="flex items-center justify-between p-4 max-w-[1024px] mx-auto">
        <div className="flex items-center">
          <img src={logo} height={30} width={40} alt="Logo" />
          <div className="ml-4 text-[25px] sm:block">
            <span className="text-purple-600">Nazi</span>Community
          </div>
        </div>
        <div className="hidden sm:flex space-x-4 items-center">
          <a href="terms.html" className="text-xl">
            About Us
          </a>
          <a
            href="https://chat.whatsapp.com/H0yeeEJje30Hu5wFUFNsqZ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>
        <button className="block sm:hidden ml-4" onClick={toggleSidebar}>
          <FaBars size={24} />
        </button>
      </div>

      {/* Sidebar for mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center">
          <div className="bg-white text-black w-64 p-6 rounded-lg">
            <button className="mb-4" onClick={toggleSidebar}>
              <FaTimes size={24} />
            </button>
            <a
              href="terms.html"
              className="block text-xl mb-4"
              onClick={toggleSidebar}
            >
              About Us
            </a>
            <a
              href="https://chat.whatsapp.com/H0yeeEJje30Hu5wFUFNsqZ"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-xl mb-4"
            >
              <FaWhatsapp size={24} className="inline mr-2" /> WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
