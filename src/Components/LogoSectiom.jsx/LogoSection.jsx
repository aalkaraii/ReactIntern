import React from "react";
import amazon from "../../assets/amazon.png";
import dribble from "../../assets/dribble.png";
import hubspot from "../../assets/hubspot.png";
import netflix from "../../assets/netflix.png";
import notion from "../../assets/notion.png";
import zoom from "../../assets/zoom.png";

function LogoSection() {
  const logos = [
    { id: 1, src: amazon },
    { id: 2, src: dribble },
    { id: 3, src: hubspot },
    { id: 4, src: notion },
    { id: 5, src: netflix },
    { id: 6, src: zoom },
  ];

  return (
    <div className="filter grayscale-100 md:max-w-[1280px] max-w-full m-auto logos-container ld:flex md:flex justify-between gap-6 pt-5 h-24  md:pt-6 grid grid-cols-3 cursor-pointer p-4 ">
      {logos.map((logo) => (
        <img key={logo.id} src={logo.src} alt={`logo-${logo.id}`} />
      ))}
    </div>
  );
}

export default LogoSection;
