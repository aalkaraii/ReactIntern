import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PiStarFourFill } from "react-icons/pi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <FaArrowRight
      className={className}
      style={{
        ...style,
        display: "block",
        color: "white",
        zIndex: 100,
        top: "103%",
        right: "32%",
        right: window.innerWidth < 768 ? "10%" : "32%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FaArrowLeft
      className={className}
      style={{
        ...style,
        display: "block",
        zIndex: 100,
        top: "103%",
        left: "32%",
        color: "white",
        left: window.innerWidth < 768 ? "10%" : "32%",
      }}
      onClick={onClick}
    />
  );
}

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slider = [
    {
      id: 1,
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    },
    {
      id: 2,
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    },
    {
      id: 3,
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    },
    {
      id: 4,
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    },
    {
      id: 5,
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    },
    {
      id: 6,
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    },
  ];
  const settings = {
    customPaging: function (i) {
      console.log("IIIII", i);
      return (
        <PiStarFourFill
          className={`h-[24px] w-[24px] rotate-45 ${
            i == activeIndex ? "text-[#B9FF66]" : "text-gray-200"
          }`}
        />
      );
    },
    dotsClass: "slick-dots slick-thumb",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    className: "center",
    centerMode: true,
    centerPadding: "260px",
    slidesToShow: 1,

    centerPadding: window.innerWidth < 768 ? "18px" : "260px",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: (index) => setActiveIndex(index),
  };

  return (
    <div className="max-w-[1280px] md:h-[625px] pt-10 p-4 m-auto">
      <div className="md:flex-row flex-col flex md:justify-start md:items-start justify-center items-center gap-5">
        <p className="bg-[#B9FF66] p-1 font-bold text-2xl rounded-lg inline">
          Testimonials
        </p>
        <div className="md:w-[400px] w-[300px] pl-2 flex text-center md:text-start">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </div>
      </div>
      <div className=" md:pt-10 flex justify-center pt-12 md:w-fit">
        <div className="bg-[#191A23] rounded-4xl md:pb-12 md:w-[1240px]  w-[370px] h-[450px] pr-0 ">
          <div className="md:pr-0 ">
            <Slider
              {...settings}
              className="bg-[#191A23] text-white pt-12 rounded-4xl pb-6"
            >
              {slider.map((item) => (
                <div key={item.id} className="">
                  <div className="md:w-[550px] w-[330px] h-[200px] p-6 border-3 border-[#B9FF66] rounded-4xl overflow-hidden relative top-1.5 ">
                    {item.text}
                  </div>

                  <div className="h-[64px] w-[200px] flex gap-6.5 pl-18  relative ">
                    <div className=" bg-[#B9FF66] h-10 w-0.5 rotate-135"></div>
                    <div className=" bg-[#B9FF66] h-10 w-0.5  rotate-45"></div>
                  </div>
                  <div className="pl-23">
                    <p className="text-[#B9FF66] md:mt-4">John Smith</p>
                    <p className="text-white">Marketing Director at XYZ Corp</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
