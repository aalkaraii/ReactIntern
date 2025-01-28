import React from "react";
import Services from "../Pages/Services/Services";
import LetsMake from "../Pages/LetsMake/LetsMake";
import Working from "../Pages/Working/Working";
import Team from "../Pages/Team/Team";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Footer from "../Pages/Footer/Footer";
import CaseStudies from "../Pages/CaseStudies/CaseStudies";
import LogoSection from "../Components/LogoSectiom.jsx/LogoSection";
import Testimonials from "../Pages/Testimonials/Testimonials";

const FirstPage = () => {
  return (
    <>
      <div className="w-fit h-fit md:max-w-[1280px] max-w-full m-auto">
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
        <LogoSection />
        <Services />
        <LetsMake />
        <CaseStudies />
        <Working />
        <Team />
        <Testimonials />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
};

export default FirstPage;
