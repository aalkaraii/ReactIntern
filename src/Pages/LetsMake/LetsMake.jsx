import React from "react";

const LetsMake = () => {
  return (
    <div className="md:w-[1280px] m-auto h-[347px] pt-10 p-4 md:relative ">
      <section className="flex flex-col justify-start  items-start bg-[#F3F3F3] p-[26px] rounded-4xl h-max ">
        <div className="flex md:p-[50px]">
          <div className="md:width-[500px] md:gap-5">
            <div className="font-bold text-2xl">Let's make things Happen</div>
            <div className="md:flex pt-4">
              Contact us today to learn more about how our digital
              <br /> marketing services can help your business grow and <br />{" "}
              succeed online.
            </div>
            <div className="pb-2 max-w-fit-content">
              <button className=" bg-black text-white p-4 md:pl-6 md:pr-6 rounded-lg cursor-pointer mt-4 w-max tracking-wider  ">
                Get your free proposal
              </button>
            </div>
          </div>
          <div className="hidden md:flex w-full md:w-[360px] absolute right-12 top-2 ">
            <img src="src/assets/starFace.png"></img>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LetsMake;
