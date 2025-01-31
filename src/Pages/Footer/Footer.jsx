import React from "react";
import { Link } from "react-router-dom";
import whiteLinkdin from "../../assets/whiteLinkdin.png";
import whiteFacebook from "../../assets/whiteFacebook.png";
import whiteTwitter from "../../assets/whiteTwitter.png";
import whiteLogo from "../../assets/whiteLogo.png";
const Footer = () => {
  const socialMedia = [
    { id: 1, img: whiteLinkdin },
    { id: 2, img: whiteFacebook },
    { id: 3, img: whiteTwitter },
  ];
  return (
    <>
      <div className="pt-20">
        <div className=" bg-[#191A23] text-white  md:rounded-t-4xl h-fit p-[60px] ">
          <div className=" flex md:flex-row flex-col justify-center items-center md:justify-between md:items-center">
            <div className="md:logos-container ld:flex md:flex md:justify-between gap-8  h-24 md:pl-4  grid grid-cols-3 w-[300px] md:w-full cursor-pointer p-4 justify-center items-center ">
              <Link
                to={"/"}
                className="w-[219.54px] h-[56px]  pb-2.5 gap-2.5 cursor-pointer "
              >
                <img src={whiteLogo}></img>
              </Link>
            </div>
            <div className=" flex md:flex-row flex-col justify-center items-center  md:justify-between md:items-center md:w-[600px]">
              <Link
                to={"/AboutUs"}
                className="md:pt-0 pt-4 md:pb-5  md:text-start md:underline md:w-[100px]"
              >
                About us
              </Link>
              <Link
                to={"/Services"}
                className="md:pt-0 pt-4 md:pb-5  md:text-start md:underline md:w-[100px] "
              >
                Services
              </Link>
              <Link
                to={"/UseCases"}
                className="md:pt-0 pt-4 md:pb-5  md:text-start md:underline md:w-[100px] "
              >
                Use Cases
              </Link>
              <Link
                to={"/Pricing"}
                className="md:pt-0 pt-4 md:pb-5  md:text-start md:underline md:w-[100px] "
              >
                Pricing
              </Link>
              <Link
                to={"/Blog"}
                className="md:pt-0 pt-4 md:pb-5  md:text-start md:underline md:w-[100px] "
              >
                Blog
              </Link>
            </div>
            <div className="md:flex ">
              {socialMedia.map((item, index) => (
                <div
                  key={index}
                  className="p-2 md:p-0 md:pl-6 hidden md:flex h-10 w-15 md:h-10 md:w-16"
                >
                  <img src={`${item.img}`}></img>
                </div>
              ))}
            </div>
          </div>
          <div className="  ">
            <div className="flex md:flex-row flex-col justify-between items-center">
              <div className="flex  flex-col justify-center items-center md:justify-start md:items-start">
                <p className=" bg-[#B9FF66] text-black w-fit md:p-1 p-1 rounded-xl font-bold md:mt-0 mt-4">
                  Contact Us :
                </p>
                <p className=" md:pt-6 pt-4">Email:info@positiveus.com</p>
                <p className="md:pt-6 pt-4">Phone : 555-567-891</p>
                <p className="md:pt-6 pt-4 md:w-[330px] text-center md:text-start w-[270px]">
                  Address:Address: 1234 Main St Moonstone City, Stardust State
                  12345
                </p>
              </div>
              <div className="md:pt-0 md:pb-0 pt-6 pb-6">
                <div className="flex md:flex-row flex-col bg-[#292A32] md:h-[184px] md:w-[634px] md:pl-[40px] md:pr-[40px] md:pt-[50px] md:pb-[50px] rounded-xl p-6 ">
                  <input
                    type="email"
                    placeholder="Email "
                    className="border-1 border-white text-white p-4 rounded-2xl w-[290px] h-[68px]"
                  ></input>
                  <button className="bg-[#B9FF66] border-1 border-white text-black p-4 rounded-2xl w-[290px] h-[68px] md:ml-6 md:mt-0 mt-6">
                    Subscribe to news
                  </button>
                </div>
              </div>
            </div>
            <div className="flex md:hidden justify-center items-center">
              {" "}
              {socialMedia.map((item, index) => (
                <div key={index} className="p-2   h-10 w-10">
                  <img src={`${item.img}`}></img>
                </div>
              ))}
            </div>
            <div className="md:pt-[60px] md:pb-[60px] pt-2 pb-4">
              <div className="h-0.5 w-full bg-gray-500 "></div>
            </div>
            <div className=" flex md:flex-row flex-col justify-center items-center md:justify-start md:items-start">
              <p className="text-white md:pt-0 pt-3">
                © 2023 Positivus. All Rights Reserved.
              </p>
              <p className="text-white underline pl-10 md:pt-0 pt-6">
                Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
