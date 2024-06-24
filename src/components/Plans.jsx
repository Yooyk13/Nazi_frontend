import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBook,
  faCrown,
  faGraduationCap,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import axios from "axios";

const plans = [
  {
    level: "Beginner",
    icon: faSearch,
    description: [
      "Learn from Scratch",
      "Start Your Knowledge With us",
      "Easy learnings",
      "Mentorship Support ",
      "24/7 Call Support ",
    ],
    members: "4+ members",
    originalPrice: "2,599",
    discountedPrice: "1,799 ",
    pdfUrl: "path/to/beginner.pdf",
  },
  {
    level: "Average",
    icon: faBook,
    description: [
      "Sharping with your average knowledge with us",
      "Easy learnings",
      "Mentorship Support ",
      "24/7 Call Support ",
    ],
    members: "9+ members",
    originalPrice: "4,599",
    discountedPrice: "3,799",
    pdfUrl: "path/to/average.pdf",
  },
  {
    level: "Advance",
    icon: faCrown,
    description: [
      "Ready to learn advanced topics with us",
      "Easy learnings",
      "Mentorship Support ",
      "24/7 Call Support ",
    ],
    members: "1+ members",
    originalPrice: "9,199",
    discountedPrice: "8,399",
    pdfUrl: "path/to/advance.pdf",
  },
];

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)", // Setting overlay color to black with 75% opacity
  },
};

const Plans = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    selectedPlan: "", // Add selectedPlan to the formData state
  });
  const [buttonText, setButtonText] = useState("Book now");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modalIsOpen]);

  const openModal = (plan) => {
    setSelectedPlan(plan);
    setFormData((prevData) => ({
      ...prevData,
      selectedPlan: plan.level, // Set the selected plan level in formData
    }));
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setFormData({ name: "", phoneNumber: "", selectedPlan: "" });
    setButtonText("Book now");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    const updatedFormData = {
      ...formData,
      name: `${formData.name} (${formData.selectedPlan})`, // Append selected plan to the name
    };
    axios
      .post("https://nazicommunity.xyz:5000/api/join", updatedFormData)
      .then((response) => {
        setButtonText("Join now");
        setSuccessMessage("Success! Our team will call you shortly.");
        setTimeout(() => {
          setSuccessMessage("");
          closeModal();
        }, 3000);
      })
      .catch((error) => {
        console.error("There was an error!");
        setButtonText("Join now");
      });
  };

  const handlePdfDownload = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="max-w-[1024px] mx-auto mt-15 mb-5 p-4">
      <h2 className="text-3xl font-bold mb-10 text-gray-100 text-center">
        Pick your Journey
      </h2>
      <div className="space-y-8 lg:space-y-0 lg:flex lg:space-x-8 justify-center">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-gray-800 text-gray-200 rounded-lg shadow-md p-6 flex flex-col w-full lg:w-1/3"
          >
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={plan.icon}
                className="text-purple-600 text-5xl mr-4"
              />
              <h3 className="text-xl font-semibold">{plan.level}</h3>
              {/* {plan.pdfUrl && (
                <FontAwesomeIcon
                  icon={faFilePdf}
                  className="text-purple-600 text-2xl ml-auto cursor-pointer"
                  onClick={() => handlePdfDownload(plan.pdfUrl)}
                />
              )} */}
            </div>
            <ul className="list-disc list-inside space-y-2 flex-grow">
              {plan.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
            {plan.members && (
              <div className="mt-4 flex justify-between items-center">
                <button
                  onClick={() => openModal(plan)}
                  className="bg-purple-600 text-gray-200 py-2 px-4 rounded-2xl"
                >
                  Join now
                </button>
                <span className="text-sm text-blue-400">{plan.members}</span>
              </div>
            )}
          </div>
        ))}
      </div>
      {selectedPlan && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Join Now Modal"
        >
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4 ">
              {selectedPlan.level}{" "}
              <span className=" text-purple-600">mentorship</span>
            </h2>
            <p className="text-gray-600 line-through">
              Rs: {selectedPlan.originalPrice}
            </p>
            <p className="text-green-600">Rs: {selectedPlan.discountedPrice}</p>
            <br />
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone number"
                  onChange={handleInputChange}
                  value={formData.phoneNumber}
                  maxLength="10"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-purple-600 text-white py-2 px-4 rounded-2xl"
              >
                {buttonText}
              </button>
            </form>
            {successMessage && (
              <p className="mt-4 text-green-600">{successMessage}</p>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Plans;
