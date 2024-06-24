import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const reviews = [
  {
    name: "A.Sabariswaran",
    text: "Even a child can understand your meeting bro🫂, I appreciate you for that and also thak you for that free meeting🫡",
  },
  {
    name: "V.Sathiyaraj",
    text: "Na ithu vara neraya meetings atten pannirukan bro neenga teach panra method awesome...  💯🫂",
  },
  {
    name: "Uthayakumar",
    text: "Your explanation is very good and can be able to absorb the concept easily as a beginner ❤🤝",
  },
];

const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow`} onClick={onClick}>
      <FontAwesomeIcon
        icon={faChevronLeft}
        className="text-purple-600"
        size="4x"
      />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow`} onClick={onClick}>
      <FontAwesomeIcon
        icon={faChevronRight}
        className="text-purple-600"
        size="4x"
      />
    </div>
  );
};

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="flex flex-col max-w-[1024px] mx-auto px-5 items-center justify-center min-h-[40vh] bg-purple-600 p-4">
      <h2 className="text-3xl font-bold text-white mb-8 rounded-lg">Reviews</h2>
      <div className="w-[300px] rounded-lg">
        <Slider {...settings} className="mb-10  ">
          {reviews.map((review, index) => (
            <div key={index} className="flex justify-center ">
              <div className="h-48 w-[300px] flex flex-col justify-center items-center bg-white shadow-md p-6 rounded-lg ">
                <p className="text-lg font-bold text-gray-800 mb-2">
                  {review.name}
                </p>
                <p className="text-gray-600 text-center">{review.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
