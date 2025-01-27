import React from "react";

import LoGos from "../Components/LoGos.jsx/logos";
import Services from "../Pages/Services/Services";
import Working from "../Pages/Working/working";
import Team from "../Pages/Team/Team";

const FirstPage = () => {
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
    <>
      <div className="w-fit h-fit max-w-[1280px] m-auto">
        <div className="lg:flex p-4 flex justify-evenly items-center md:p-4 lg:gap-20 ">
          <div className="flex flex-col lg:w-1/2 md:w-1/2 ">
            <div className="md:pl-2 mdp-4 md:text-4xl text-xl font-bold  ">
              Navigating the digital landscape for success
            </div>
            <div className="text-sm md:pl-2 md:p-4 md:text-lg pt-4 ">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </div>
            <div className="md:pl-2 md:p-4 pt-4">
              <button className="border bg-black text-white md:p-4 w-fit rounded-lg cursor-pointer ">
                Book a consultation
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-end items-end ">
            <img src="src/assets/mic.png"></img>
          </div>
        </div>
        <LoGos />
      </div>
      <div className=" max-w-[1280px] m-auto lg:relative md:relative relative top-16 md:top-0 lg:top-20">
        <Services />
      </div>
      <div className="max-w-[1280px] m-auto">
        <div className=" h-max absolute pt-30  md:p-[100px] p-4">
          <section className="flex flex-col justify-start max-w-[1280px] m-auto items-start bg-[#F3F3F3] p-[26px] rounded-4xl h-max ">
            <div className="flex md:p-[50px]">
              <div className="md:width-[500px] md:gap-5">
                <div className="font-bold text-2xl">
                  Let's make things Happen
                </div>
                <div className="md:flex pt-4">
                  Contact us today to learn more about how our digital
                  <br /> marketing services can help your business grow and{" "}
                  <br /> succeed online.
                </div>
                <div className="pb-2 max-w-fit-content">
                  <button className=" bg-black text-white p-4  rounded-lg cursor-pointer mt-4 w-max  ">
                    Get your free proposal
                  </button>
                </div>
              </div>
              <div className="hidden md:flex w-full md:w-[394px] md:absolute md:right-30 md:top-20">
                <img src="src/assets/starFace.png"></img>
              </div>
            </div>
          </section>
          <section className="pt-20 max-w-full">
            <div className="flex flex-col justify-start items-start  p-[26px] rounded-4xl h-max ">
              <div className="flex  justify-center items-center gap-5">
                <h1 className="font-bold text-4xl bg-[#B9FF66] w-fit p-1 rounded-lg">
                  Case Studies
                </h1>
                <p className="">
                  Explore Real-Life Examples of Our Proven Digital Marketing
                  <br />
                  Success through Our Case Studies
                </p>
              </div>

              <div className="md:pt-8 hidden md:flex ">
                <div className="bg-[#191A23] flex p-[60px] rounded-4xl gap-5 pt-8">
                  <div className="pr-[60px]">
                    <p className="text-white">
                      For a local restaurant, we implemented a targeted PPC
                      campaign that resulted in a 50% increase in website
                      traffic and a 25% increase in sales.
                    </p>
                    <p className="text-[#B9FF66] text-xl">Learn More</p>
                  </div>
                  <div className="bg-white h-ful w-1"></div>
                  <div className="pr-[60px] ">
                    <p className="text-white">
                      For a B2B software company, we developed an SEO strategy
                      that resulted in a first page ranking for key keywords and
                      a 200% increase in organic traffic.
                    </p>
                    <p className="text-[#B9FF66] text-xl">Learn More</p>
                  </div>
                  <div className="bg-white h-ful w-1"></div>
                  <div className=" ">
                    <p className="text-white">
                      For a national retail chain, we created a social media
                      marketing campaign that increased followers by 25% and
                      generated a 20% increase in online sales.
                    </p>
                    <p className="text-[#B9FF66] text-xl">Learn More</p>
                  </div>
                </div>
              </div>
              {caseStudies.map((item, index) => (
                <div
                  className="md:hidden bg-[#191A23] text-white flex flex-col rounded-4xl border-2 border-black border-b-4 md:w-lg w-fit lg:w-lg p-4 h-"
                  key={index}
                >
                  <div className=" justify-between p-2">
                    <div className="text-2xl p-1 flex-col gap-1 lg:w-52 rounded-md inline-block ">
                      <span className="inline">{item.text}</span>
                    </div>
                    <button className="flex items-center space-x-2 pt-2 text-xl text-[#B9FF66]">
                      <div className="">Learn more</div>
                      <img
                        src="src/assets/arrow.png"
                        alt="Arrow Icon"
                        className="h-6"
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <Working />
          <Team />
        </div>
      </div>
    </>
  );
};

export default FirstPage;
