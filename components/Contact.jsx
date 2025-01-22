"use client";
import { socialLinks } from "@/assets/assets";
import React, { useState } from "react";
import Image from "next/image";

// const socialLinks = [
//     {
//       href: 'https://www.github.com/codewithsadee-org',
//       icon:  ,
//       alt: 'GitHub'
//     },
//     {
//       href: 'https://www.linkedin.com/in/codewithsadee',
//       icon: <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M5.75 3C4.24011 3 3 4.24011 3 5.75V18.25C3 19.7599 4.24011 21 5.75 21H18.25C19.7599 21 21 19.7599 21 18.25V5.75C21 4.24011 19.7599 3 18.25 3H5.75ZM5.75 4.5H18.25C18.9491 4.5 19.5 5.05089 19.5 5.75V18.25C19.5 18.9491 18.9491 19.5 18.25 19.5H5.75C5.05089 19.5 4.5 18.9491 4.5 18.25V5.75C4.5 5.05089 5.05089 4.5 5.75 4.5ZM7.75 6.5C7.41848 6.5 7.10054 6.6317 6.86612 6.86612C6.6317 7.10054 6.5 7.41848 6.5 7.75C6.5 8.08152 6.6317 8.39946 6.86612 8.63388C7.10054 8.8683 7.41848 9 7.75 9C8.08152 9 8.39946 8.8683 8.63388 8.63388C8.8683 8.39946 9 8.08152 9 7.75C9 7.41848 8.8683 7.10054 8.63388 6.86612C8.39946 6.6317 8.08152 6.5 7.75 6.5ZM7 10C6.7235 10 6.5 10.2235 6.5 10.5V17C6.5 17.2765 6.7235 17.5 7 17.5H8.5C8.7765 17.5 9 17.2765 9 17V10.5C9 10.2235 8.7765 10 8.5 10H7ZM10.5 10C10.2235 10 10 10.2235 10 10.5V17C10 17.2765 10.2235 17.5 10.5 17.5H12C12.2765 17.5 12.5 17.2765 12.5 17V13.25C12.5 12.5605 13.0605 12 13.75 12C14.4395 12 15 12.5605 15 13.25V17C15 17.2765 15.2235 17.5 15.5 17.5H17C17.2765 17.5 17.5 17.2765 17.5 17V13C17.5 11.3455 16.1545 10 14.5 10C13.731 10 13.0315 10.293 12.5 10.7705V10.5C12.5 10.2235 12.2765 10 12 10H10.5Z" fill="currentColor" />
//       </svg>,
//       alt: 'LinkedIn'
//     },
//     {
//       href: 'https://x.com/codewithsadee_',
//       icon: <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M6.25 3C4.46403 3 3 4.46403 3 6.25V17.75C3 19.536 4.46403 21 6.25 21H17.75C19.536 21 21 19.536 21 17.75V6.25C21 4.46403 19.536 3 17.75 3H6.25ZM6.25 4.5H17.75C18.725 4.5 19.5 5.27497 19.5 6.25V17.75C19.5 18.725 18.725 19.5 17.75 19.5H6.25C5.27497 19.5 4.5 18.725 4.5 17.75V6.25C4.5 5.27497 5.27497 4.5 6.25 4.5ZM6.91406 7L10.7822 12.5283L6.91113 17H7.93262L11.2344 13.1758L13.9102 17H17.1289L13.0127 11.1172L16.5684 7H15.5684L12.5615 10.4717L10.1328 7H6.91406ZM8.46777 7.84766H9.74902L15.5752 16.1523H14.2939L8.46777 7.84766Z" fill="currentColor" />
//       </svg>,
//       alt: 'Twitter X'
//     },
//     {
//       href: 'https://www.instagram.com/codewithsadee',
//       icon:
//       alt: 'Instagram'
//     },
//   ];
const Contact = () => {
  // const [isSubmit, setIsSubmit] = React.useState(false);
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "86651435-03e6-45d2-8034-1458018c6034");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Send Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      id="contact"
      className="w-full bg-gradient-to-r from-indigo-100 via-purple-100 to-blue-100 px-[12%] py-0 md:py-10  scroll-mt-40 select-none"
    >
      <h2 
        data-aos="zoom-in-up"
      className="text-center mb-10 md:-mt-28 text-4xl  font-Cedarville_Cursive">
        Contact With Me
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 sm:bg-slate-100">
        <div className=" sm:h-[65vh] max-sm:bg-white p-6 rounded-lg">
          <p
            data-aos="zoom-in-right"
          className="text-center justify-center max-w-3xl mx-auto  md:pt-20 pt-10 sm:w-[70%] mb-1">
            If you have any questions or would like to work together, please
            contact with me. I am always open to new opportunities and
            collaborations.
          </p>
          <div
           data-aos="zoom-out"
          className="flex justify-center gap-4 mt-6">
            {socialLinks.map((Data, index) => (
              <a
                key={index}
                href={Data.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                style={{ backgroundImage: `url(${Data.Image})` }}
              >
                <Image src={Data.Image} alt={Data.title} className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
        <form
         onSubmit={onSubmit}
          // action="https://getform.io/f/azyyjeyb"
          // method="POST"
          className="max-w-2xl  mx-auto px-4"
        >
          <div className="grid md:grid-cols-2  grid-cols-1 gap-6 mt-10 mb-6">
            <input
            data-aos="zoom-out-right"
              type="text"
              name="name" 
              placeholder="Enter your Name"
              required
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            />
            <input
            data-aos="zoom-out-left"
              type="email"
              name="email" 
              placeholder="Enter your Email"
              required
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            />
          </div>
          <textarea
          data-aos="zoom-out-up"
           name="message"
            rows="6"
            placeholder="Enter your message"
            required
            className="w-full p-4 outline-none border-[.5px] border-gray-400 rounded-md bg-white mb-6 "
          ></textarea>
           <input type="hidden" name="_gotcha" className="display:none !important"></input>
          <button
           data-aos="zoom-out-up"
            type="sumbit"
            className="py-3 px-8 mb-4 w-max flex items-center justify-center gap-2 bg-black text-white rounded-full mx-auto hover:bg-black/80 duration-500"
          >
          Submit Now
          </button>
          <p className="mt-4 text-green-400 font-Cedarville_Cursive">{result}</p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
