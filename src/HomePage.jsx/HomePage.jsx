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
import NavBar from "../Components/NavBar.jsx/NavBar";

const HomePage = () => {
  return (
    <>
      <div className="w-fit font-['Space_Grotesk'] h-fit md:max-w-[1280px] max-w-full m-auto ">
        <nav className="sticky top-0 z-50 bg-white ">
          <NavBar></NavBar>
        </nav>

        <div className="lg:flex p-4 flex justify-evenly items-center md:p-4 lg:gap-20  ">
          <div className="flex flex-col lg:w-1/2 md:w-1/2 ">
            <div className="md:pl-2 mdp-4 md:text-4xl text-4xl font-bold w-it font-['Space_Grotesk'] ">
              Navigating the digital landscape for success
            </div>
            <div className="md:hidden flex flex-col justify-end items-end ">
              <img src="src/assets/mic.png"></img>
            </div>
            <div className="text-sm md:pl-2 md:p-4 md:text-lg pt-4 ">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </div>
            <div className="md:pl-2 md:p-4 pt-4">
              <button className="border tracking-wider bg-black text-white md:p-4 md:pl-8 md:pr-8 md:w-fit rounded-xl cursor-pointer p-4 w-full ">
                Book a consultation
              </button>
            </div>
          </div>

          <div className=" hidden md:flex flex-col justify-end items-end ">
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

export default HomePage;
