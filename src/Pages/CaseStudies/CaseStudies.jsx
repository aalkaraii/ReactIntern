import React from "react";

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
    <div>
      <section className="pt-20 max-w-full">
        <div className="flex flex-col justify-start items-start  p-[26px] rounded-4xl h-max ">
          <div className="flex  justify-center items-center gap-5">
            <h1 className="font-bold text-xl md:text-4xl bg-[#B9FF66] w-fit p-1 rounded-lg">
              Case Studies
            </h1>
            <p className="text-sm">
              Explore Real-Life Examples of Our Proven Digital Marketing
              <br />
              Success through Our Case Studies
            </p>
          </div>

          <div className="md:pt-8 hidden md:flex ">
            <div className="bg-[#191A23] flex p-[60px] rounded-4xl gap-5 pt-8">
              <div className="pr-[60px]">
                <p className="text-white ">
                  For a local restaurant, we implemented a targeted PPC campaign
                  that resulted in a 50% increase in website traffic and a 25%
                  increase in sales.
                </p>
                <p className="text-[#B9FF66] text-xl">Learn More</p>
              </div>
              <div className="bg-white h-ful w-1"></div>
              <div className="pr-[60px] ">
                <p className="text-white">
                  For a B2B software company, we developed an SEO strategy that
                  resulted in a first page ranking for key keywords and a 200%
                  increase in organic traffic.
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
          <div className="md:hidden flex gap-10 pt-14 overflow-x-auto w-[350px]">
            {caseStudies.map((item, index) => (
              <div
                className="bg-[#191A23] text-white flex-shrink-0 flex flex-col rounded-4xl border-2 border-black border-b-4 md:w-lg w-70 h-70 overflow-x-hidden mr-4"
                key={index}
              >
                <div className="justify-between p-6">
                  <div className="text-2xl p-1 flex-col gap-1 lg:w-52 rounded-md inline-block">
                    <span className="text-sm md:text-lg">{item.text}</span>
                  </div>
                  <button className="flex items-center space-x-2 pt-2 text-xl text-[#B9FF66]">
                    <div>Learn more</div>
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
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
