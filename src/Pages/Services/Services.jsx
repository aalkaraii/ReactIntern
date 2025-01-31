import React from "react";
import click from "../../assets/click.png";
import socialMedia from "../../assets/socialMedia.png";
import email from "../../assets/email.png";
import content from "../../assets/content.png";
import analytics from "../../assets/analytics.png";
import arrow from "../../assets/arrow.png";
const Services = () => {
  const card = [
    {
      title: "Search engine optimization",
      img: { search },
      color: "#F3F3F3",
      textbg: "#B9FF66",
    },
    {
      title: "Pay-per-click advertising",
      img: { click },
      color: "#B9FF66",
      textbg: "white",
    },
    {
      title: "Social media marketing",
      img: { socialMedia },
      color: "#191A23",
      textbg: "white",
      buttonColor: "white",
    },
    {
      title: "Email Marketing",
      img: { email },
      color: "#F3F3F3",
      textbg: "#B9FF66",
    },
    {
      title: "Content creation",
      img: { content },
      color: "#B9FF66",
      textbg: "white",
    },
    {
      title: "Analytics and Tracking",
      img: { analytics },
      color: "#191A23",
      textbg: "white",
      buttonColor: "white",
    },
  ];

  return (
    <div className="flex  flex-col gap-4 p-4 justify-center items-center pt-10 md:pt-10 md:justify-start md:items-start">
      <div className="md:flex md:flex-row md:justify-start md:items-start gap-4 flex flex-col justify-center items-center   ">
        <div className="p-1  inline-block bg-[#B9FF66]  w-fit font-bold text-2xl rounded-xl ">
          Services
        </div>
        <div className="md:flex md:flex-col md:gap-4 md:w-1/2 justify-center items-center text-center md:text-md">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </div>
      </div>
      <div className="md:flex md:flex-row md:justify-center md:items-center  flex flex-col justify-center items-center cursor-pointer  md:gap-[40px] pt-10">
        <div className="grid grid-cols-1 md:gap-[40px] gap-4 md:grid-cols-2">
          {card.map((item, index) => (
            <div
              className="bg-gray-200 flex rounded-4xl border-2 border-black border-b-4 md:w-[600px]  md:h-[310px] w-full p-[60px] md:p-[50px]"
              key={index}
              style={{ backgroundColor: item.color }}
            >
              <div className=" justify-between  md:p-2">
                <div className="text-2xl p-1 flex-col gap-1 md:w-52 rounded-md inline-block ">
                  <span
                    className="inline p-1 font-semibold"
                    style={{ backgroundColor: item.textbg }}
                  >
                    {item.title}
                  </span>
                </div>
                <button
                  className="flex items-center space-x-2 pt-2 md:pt-24"
                  style={{ color: item.buttonColor }}
                >
                  <img
                    src={arrow}
                    alt="Arrow Icon"
                    className="h-6 md:h-[44px]"
                  />
                  <div className="hidden md:flex md:pl-3 ">Learn more</div>
                </button>
              </div>
              <img
                src={item.img}
                alt="Card Image"
                className="md:flex md:h-full md:w-full md:object-cover md:p-6 w-30 h-30"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
