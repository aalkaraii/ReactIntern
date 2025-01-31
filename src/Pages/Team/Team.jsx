import React from "react";
import janeDoe from "../../assets/janeDoe.png";
import Michael from "../../assets/Michael.png";
import Emily from "../../assets/Emily.png";
import brian from "../../assets/brian.png";
import sarah from "../../assets/sarah.png";
import Linkdin from "../../assets/Linkdin.png";
const Team = () => {
  const teamMembers = [
    {
      img: { janeDoe },
      name: "Jane Doe",
      title: "Director of Operations",
      experience:
        "7+ years of experience in project management and team leadership.",
      skills: "Strong organizational and communication skills",
    },
    {
      img: { Michael },
      name: "Michael Brown",
      title: "Senior SEO Specialist",
      experience: "5+ years of experience in SEO and content creation.",
      skills: "Proficient in keyword research and on-page optimization",
    },
    {
      img: { Emily },
      name: "Emily Johnson",
      title: "PPC Manager",
      experience: "3+ years of experience in paid search advertising.",
      skills: "Skilled in campaign management and performance analysis",
    },
    {
      img: { brian },
      name: "Brian Williams",
      title: "Social Media Specialist",
      experience: "4+ years of experience in social media marketing.",
      skills:
        "Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    },
    {
      img: { sarah },
      name: "Sarah Kim",
      title: "Content Creator",
      experience: "2+ years of experience in writing and editing.",
      skills:
        "Skilled in creating compelling, SEO-optimized content for various industries",
    },
    {
      img: { sarah },
      name: "Sarah Kim",
      title: "Content Creator",
      experience: "2+ years of experience in writing and editing.",
      skills:
        "Skilled in creating compelling, SEO-optimized content for various industries",
    },
  ];

  return (
    <div className="p-4 pt-20 ">
      <div className="flex md:flex-row md:justify-start md:items-start flex-col justify-center items-center gap-2 p-4">
        <header className="text-2xl font-bold mb-4 bg-[#B9FF66] p-1 rounded-sm ">
          Team
        </header>
        <div className="md:w-[400px] w-[350px] pl-2 flex text-center md:text-start">
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="border border-b-7 rounded-4xl p-4 shadow-md bg-white flex flex-col items-center"
          >
            <div className="flex items-center justify-between w-full mb-4 gap-4 relative">
              {/* Member's image */}
              <img
                src={member.img}
                alt={`${member.name}'s photo`}
                className="h-[98px] w-[98px] rounded-full"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{member.name}</h2>
                <h3 className="text-md text-gray-600">{member.title}</h3>
              </div>
              {/* LinkedIn icon */}
              <img
                src={Linkdin}
                alt="LinkedIn"
                className="h-[34px] w-[34px] absolute top-2 right-0"
              />
            </div>
            {/* Separator */}
            <div className="bg-gray-300 w-full h-[2px] mb-4"></div>
            {/* Experience and skills */}
            <p className="text-gray-700 mb-1 text-center">
              {member.experience}
            </p>
            <p className="text-gray-700 text-center">{member.skills}</p>
          </div>
        ))}
        <div className="md:hidden flex justify-between items-center mt-2  ">
          <button className=" bg-black text-white p-3 rounded-xl pl-10 pr-10 w-[758px] cursor-pointer">
            See all team
          </button>
        </div>
      </div>
      <div className="flex justify-end align-end mt-10 ">
        <button className="hidden md:flex bg-black text-white p-3 rounded-xl pl-16 pr-16 cursor-pointer">
          See all team
        </button>
      </div>
    </div>
  );
};

export default Team;
