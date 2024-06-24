import React from "react";
import { FaFacebook, FaInstagram, FaDiscord, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="max-w-screen-lg mx-auto py-8 px-4 md:px-0">
        {/* Flex Container */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Section */}
          <div className="mb-8 md:mb-0 md:mr-16 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">NAZI COMMUNITY</h2>
            <p className="text-sm md:text-base max-w-sm mx-auto md:max-w-none">
              We are dedicated to empowering individuals with the knowledge and
              skills necessary to succeed in the dynamic world of the
              sharemarket.
            </p>
          </div>

          {/* Right Section */}
          <div
            className="flex flex-col md:text-center md:items-center"
            style={{ position: "relative", zIndex: 1 }}
          >
            {/* Legal Links */}
            <div
              className="mb-8 text-center md:text-left"
              style={{ position: "relative", zIndex: 1 }}
            >
              <h3
                className="text-lg font-bold mb-4"
                style={{ position: "relative", zIndex: 1 }}
              >
                Legal
              </h3>
              <ul className="p-0" style={{ position: "relative", zIndex: 1 }}>
                <li
                  className="mb-4"
                  style={{ position: "relative", zIndex: 1 }}
                >
                  <a
                    href="/about.html"
                    className="text-gray-400   hover:text-gray-50"
                    style={{ position: "relative", zIndex: 1 }}
                  >
                    About Us
                  </a>
                </li>
                <li
                  className="mb-4"
                  style={{ position: "relative", zIndex: 1 }}
                >
                  <a
                    href="/terms.html"
                    className="text-gray-400  hover:text-gray-50"
                    style={{ position: "relative", zIndex: 1 }}
                  >
                    Terms and Conditions
                  </a>
                </li>
                <li
                  className="mb-4"
                  style={{ position: "relative", zIndex: 1 }}
                >
                  <a
                    href="/privacy.html"
                    className="text-gray-400  hover:text-gray-50"
                    style={{ position: "relative", zIndex: 1 }}
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center">
              <a
                href="https://www.instagram.com/nazi_trading_community?igsh=ZjR6dDU3dGZoM2g1"
                className="text-gray-400 hover:text-gray-200 transition duration-300 ease-in-out mx-2"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://discord.com/invite/PnZU2Wb4"
                className="text-gray-400 hover:text-gray-200 transition duration-300 ease-in-out mx-2"
              >
                <FaDiscord className="text-2xl" />
              </a>
              <a
                href="https://www.youtube.com/@Nazi_Trading"
                className="text-gray-400 hover:text-gray-200 transition duration-300 ease-in-out mx-2"
              >
                <FaYoutube className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
