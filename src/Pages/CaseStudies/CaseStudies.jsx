import React from "react";
import arrow from "../../assets/arrow.png";
const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website trafficand a 25% increase in sales.",
    },
    {
      id: 2,
      text: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    },
    {
      id: 3,
      text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    },
  ];
  return (
    <div className="max-w-[1280px] m-auto md:p-0 p-4 ">
      <section className="md:pt-20 ">
        <div className="flex flex-col md:justify-start md:items-start justify-center items-center  md:p-[26px] rounded-4xl h-max ">
          <div className=" md:pl-0 pl-6 flex flex-col md:flex-row justify-center items-center gap-5">
            <h1 className="font-bold text-2xl md:text-2xl bg-[#B9FF66] w-fit p-1 rounded-lg">
              Case Studies
            </h1>
            <p className="w-[340px] text-center md:text-start">
              Explore Real-Life Examples of Our Proven Digital Marketing Success
              through Our Case Studies
            </p>
          </div>

          <div className="md:pt-8 hidden md:flex ">
            <div className="bg-[#191A23] flex p-[60px] rounded-4xl gap-5 pt-8 ">
              <div className=" pr-[60px] pl-[60px]">
                <p className="text-white ">
                  For a local restaurant, we implemented a targeted PPC campaign
                  that resulted in a 50% increase in website traffic and a 25%
                  increase in sales.
                </p>
                <div className="flex pt-4">
                  <p className="text-[#B9FF66] text-xl">Learn More</p>
                  <img src={arrow} alt="Arrow Icon" className="h-8 w-8  " />
                </div>
              </div>
              <div className="bg-white h-ful w-1"></div>
              <div className=" pr-[60px] pl-[60px] ">
                <p className="text-white ">
                  For a B2B software company, we developed an SEO strategy that
                  resulted in a first page ranking for key keywords and a 200%
                  increase in organic traffic.
                </p>
                <div className="flex pt-10">
                  <p className="text-[#B9FF66] text-xl">Learn More</p>
                  <img src={arrow} alt="Arrow Icon" className="h-8 w-8 " />
                </div>{" "}
              </div>
              <div className="bg-white h-ful w-1"></div>
              <div className="pr-[60px] pl-[60px]  ">
                <p className="text-white">
                  For a national retail chain, we created a social media
                  marketing campaign that increased followers by 25% and
                  generated a 20% increase in online sales.
                </p>
                <div className="flex pt-4">
                  <p className="text-[#B9FF66] text-xl ">Learn More</p>
                  <img src={arrow} alt="Arrow Icon" className="h-8 w-8 " />
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden flex gap-4 md:pt-14 pt-6 overflow-x-auto overflow-hidden w-full  md:pl-4">
            {caseStudies.map((item, index) => (
              <div
                className="bg-[#191A23] text-white flex-shrink-0 flex flex-col rounded-4xl border-2 border-black border-b-4 md:w-lg w-full h-[300px] overflow-x-hidden md:mr-4"
                key={index}
              >
                <div className="justify-between p-6">
                  <div className="text-2xl p-1 flex-col md:gap-1 w-full rounded-md inline-block">
                    <span className="text-sm md:text-lg ">{item.text}</span>
                  </div>
                  <button className="flex items-center space-x-2 pt-2 text-xl text-[#B9FF66]">
                    <div>Learn more</div>
                    <img src={arrow} alt="Arrow Icon" className="h-6 " />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
