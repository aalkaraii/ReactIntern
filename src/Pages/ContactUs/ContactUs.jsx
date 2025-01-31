import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l9rmxvs", // Replace with your EmailJS Service ID
        "template_owfq8yn", // Replace with your EmailJS Template ID
        form.current,
        "x0WpLc62YiE6QeXMb" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          alert("Email Sent!");
          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        (error) => {
          console.error("Failed to send email", error.text);
        }
      );
  };

  return (
    <div className="bg-white h-fit p-4 md:pt-20 pt-10 ">
      <div className="flex md:flex-row flex-col gap-3 md:justify-start md:items-start justify-center items-center ">
        <p className="bg-[#B9FF66] inline-block p-1 font-bold text-2xl rounded-lg w-fit">
          Contact Us
        </p>
        <p className=" md:w-[323px] md:text-start text-center">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>
      <div className="pt-[50px] ">
        <div className="flex flex-row lg:flex-row bg-[#F3F3F3] relative max-w-[1240px] m-auto rounded-4xl  overflow-hidden">
          <div className="flex flex-col flex-1 p-6 lg:p-10 gap-2 ">
            <div className="flex gap-4">
              <label className="flex items-center space-x-2  ">
                <input
                  type="radio"
                  name="purpose"
                  value="say_hi"
                  className="scale-150 me-1"
                  required
                />
                Say Hi
              </label>

              <label className="flex items-center space-x-2  ">
                <input
                  type="radio"
                  name="purpose"
                  value="business_inquiry"
                  className="scale-150 me-1"
                  required
                />
                Get a Quote
              </label>
            </div>{" "}
            <form
              ref={form}
              onSubmit={sendEmail}
              className="max-w-[556px] flex flex-col"
            >
              <label htmlFor="name" className="pt-6 ">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                className="p-3 border-1 border-black rounded-xl bg-white"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label htmlFor="email" className="pt-3">
                Email*
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                className="p-3 border border-black rounded-xl bg-white"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="message" className="pt-3">
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                className="p-3 border border-black rounded-xl h-32 resize-none bg-white"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button
                type="submit"
                className="hidden justify-center items-center md:flex mt-[40px] bg-[#191A23] text-white rounded-xl hover:bg-[#333] transition p-4"
              >
                Send Message
              </button>
              <button
                type="submit"
                className="md:hidden w-full mx-auto mt-4 bg-[#191A23] text-white py-2 px-4 rounded-xl hover:bg-[#333] transition pt-6 pb-4"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="hidden lg:flex  justify-center items-center">
            <img
              src="src/assets/contactus.png"
              alt="Contact Us"
              className="w-[491px] h-[648] absolute right-[-3/2]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
