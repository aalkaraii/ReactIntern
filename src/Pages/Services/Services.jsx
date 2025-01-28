import React from "react";

const Services = () => {
  const card = [
    {
      title: "Search engine optimization",
      img: "src/assets/search.png",
      color: "#F3F3F3",
      textbg: "#B9FF66",
    },
    {
      title: "Pay-per-click advertising",
      img: "src/assets/click.png",
      color: "#B9FF66",
      textbg: "white",
    },
    {
      title: "Social media marketing",
      img: "src/assets/socialMedia.png",
      color: "#191A23",
      textbg: "white",
      buttonColor: "white",
    },
    {
      title: "Email Marketing",
      img: "src/assets/email.png",
      color: "#F3F3F3",
      textbg: "#B9FF66",
    },
    {
      title: "Content creation",
      img: "src/assets/content.png",
      color: "#B9FF66",
      textbg: "white",
    },
    {
      title: "Analytics and Tracking",
      img: "src/assets/analytics.png",
      color: "#191A23",
      textbg: "white",
      buttonColor: "white",
    },
  ];

  return (
    <div className="flex  flex-col gap-4 p-4 justify-center items-center pt-30 md:justify-start md:items-start">
      <div className="md:flex md:flex-row md:justify-start md:items-start gap-4 flex flex-col justify-center items-center md:pl-10  ">
        <div className="p-1 inline-block bg-[#B9FF66]  w-fit font-medium text-3xl rounded-2xl ">
          Services
        </div>
        <div className="md:flex md:flex-col gap-4 md:w-1/2 justify-center items-center text-center md:text-md">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </div>
      </div>
      <div className="md:flex md:flex-row md:justify-center md:items-center  flex flex-col justify-center items-center cursor-pointer  gap-[40px]">
        <div className="grid grid-cols-1 md:gap-[40px] gap-8 md:grid-cols-2  ">
          {card.map((item, index) => (
            <div
              className="bg-gray-200 flex rounded-4xl border-2 border-black border-b-4 md:w-[600px] md:h-[310px] md:[310px]    p-[50px]"
              key={index}
              style={{ backgroundColor: item.color }}
            >
              <div className=" justify-between p-2">
                <div className="text-2xl p-1 flex-col gap-1 md:w-52 rounded-md inline-block ">
                  <span
                    className="inline"
                    style={{ backgroundColor: item.textbg }}
                  >
                    {item.title}
                  </span>
                </div>
                <button
                  className="flex items-center space-x-2 pt-2"
                  style={{ color: item.buttonColor }}
                >
                  <img
                    src="src/assets/arrow.png"
                    alt="Arrow Icon"
                    className="h-6"
                  />
                  <div className="hidden md:flex md:flex">Learn more</div>
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
