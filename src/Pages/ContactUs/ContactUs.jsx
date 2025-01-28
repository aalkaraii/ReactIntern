import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-white min-h-screen p-4 ">
      <div className="flex flex-row gap-3 ">
        <p className="bg-[#B9FF66] inline-block p-1 font-bold text-2xl rounded-lg ">
          Contact Us
        </p>
        <p className=" w-[323px] ">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>
      <div className="pt-[50px] ">
        <div className="flex flex-row lg:flex-row bg-[#F3F3F3] relative max-w-[1240px] mx-auto rounded-4xl  overflow-hidden">
          <div className="flex flex-col flex-1 p-6 lg:p-10 gap-2 ">
            <div className="max-w-[556px] flex flex-col">
              <div className="flex gap-2 ">
                <input type="radio" name="action" />

                <label className="">Say Hi</label>

                <input
                  type="radio"
                  name="action"
                  className=" checked:bg-[#B9FF66]"
                />
                <label>Get a Quote</label>
              </div>

              <label htmlFor="name" className="pt-6 ">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                className="p-3 border-1 border-black rounded-xl"
              />
              <label htmlFor="email" className=" pt-3">
                Email*
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="p-3 border border-black rounded-xl"
              />
              <label htmlFor="message" className=" pt-3">
                Message*
              </label>
              <textarea
                id="message"
                placeholder="Message"
                className="p-3 border border-black rounded-xl h-32 resize-none"
              ></textarea>
              <button className=" hidden justify-center items-center md:flex mt-[40px] bg-[#191A23] text-white  rounded-xl hover:bg-[#333] transition p-4">
                Send Message
              </button>
            </div>
          </div>

          <div className="hidden lg:flex  justify-center items-center">
            <img
              src="src/assets/contactus.png"
              alt="Contact Us"
              className="w-[491px] h-[648] absolute right-[-3/2]"
            />
          </div>
        </div>
        <button className="md:hidden w-full mx-auto  mt-4 bg-[#191A23] text-white py-2 px-4 rounded-xl hover:bg-[#333] transition pt-6 pb-4">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
