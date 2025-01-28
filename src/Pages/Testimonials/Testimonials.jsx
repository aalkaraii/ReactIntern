import React from "react";

import "swiper/css";
const Testimonials = () => {
  return (
    <div>
      <div className="flex">
        <p className="bg-[#B9FF66] p-1 font-bold text-2xl rounded-lg">
          Testimonials
        </p>
        <div className="w-[473px] pl-2">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </div>
      </div>
      <section className="box-content w-[600px] h-[300px] border-4">
        <div className="p-10">
          "We have been working with Positivus for the past year and have seen a
          significant increase in website traffic and leads as a result of their
          efforts. The team is professional, responsive, and truly cares about
          the success of our business. We highly recommend Positivus to any
          company looking to grow their online presence."
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
