import React from "react";
import Image from "next/image";
import { assets, infoList } from "@/assets/assets";

const About = () => {
  return (
    <div id="about" className=" bg-gradient-to-r from-indigo-100 via-purple-100 to-blue-100 w-full px-[12%] py-0 md:py-10 scroll-mt-12 select-none">
      <h4 
        data-aos="zoom-in-down"
      className="text-center mb-2 text-lg  font-Outfit">Introduction </h4>
      <h2 
        data-aos="zoom-out-up"
      className="text-center text-4xl font-Cedarville_Cursive  ">
        About Me
      </h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-10 md:gap-16 my-10 md:my-16">
        <div 
        data-aos="zoom-in-right"
        className="w-56 sm:w-72 rounded-3xl max-w-none ">
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl hover:scale-105 duration-300 cursor-pointer"
          />
        </div>
        <div className="flex-1">
          <p
          data-aos="zoom-in-left"
           className="mb-10 max-w-2xl font-Outfit">
            {" "}
            I am a Fullstack Web Developer , I build many projects using HTML,
            CSS, JavaScript, React, Redux, and Next.js. I am passionate about
            building responsive, user-friendly, and visually appealing web
            applications. I am always eager to learn new technologies and
            improve my skills.
          </p>
          <ul
          data-aos="zoom-in-up"
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({icon, title, description}, index) => (
                <li key={index} className=" border-[0.5px] border-gray-400 rounded-xl p-4 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black"> 
                <Image src={icon} alt={title} className="w-7 mt-3"/>
                <h3 className="my-1 font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
                </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
