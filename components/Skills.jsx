import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Skills = () => {
  return (
    <div
      id="skills"
      className=" bg-gradient-to-r from-indigo-100 via-purple-100 to-blue-100 px-[16%]   md:pt-0 md:py-10 -mt-10 scroll-mt-28 select-none"
    >
      <h2 
      data-aos="zoom-out-down"
      className="text-center mb-2 pt-16 md:mt-0 text-4xl font-Cedarville_Cursive">
        Skills
      </h2>
      <p 
     data-aos="zoom-out-up"
      className="text-center max-w-2xl mx-auto font-Outfit mt-5 mb-12">
        I have a lot of expereince in web development and I have worked with
        these technologies:
      </p>
      <div
      // data-aos="zoom-out"
      className="grid gap-4 space-x-4 grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))]">
        <div 
          data-aos="zoom-in-left"
        className="flex ml-4  p-2 cursor-pointer duration-300  hover:bg-white  ring-2 ring-slate-500 rounded space-x-8 ">
          <Image
            src={assets.jscript}
            alt="css logo "
            className="w-8 shadow-md "
          />
          <h4>Javascript</h4>
        </div>
        <div 
          data-aos="zoom-in-up"
        className="flex  hover:bg-white  p-2 cursor-pointer duration-300 ring-2 ring-slate-500 rounded space-x-8 ">
          <Image src={assets.react} alt="react logo " className="w-8  " />
          <h4>ReactJS</h4>
        </div>
        <div 
        data-aos="zoom-in-up"
        className="flex  hover:bg-white   p-2 cursor-pointer duration-300 ring-2 ring-slate-500 rounded space-x-8 ">
          <Image src={assets.Redux} alt="redux logo " className="w-8  " />
          <h4>Redux</h4>
        </div>
        <div
        data-aos="zoom-in-right"
        className="flex  p-2 cursor-pointer duration-300  hover:bg-white  ring-2 ring-slate-500 rounded space-x-8 ">
          <Image src={assets.next} alt="nextjs " className="w-8 " />
          <h4>NextJS</h4>
        </div>
        <div
        data-aos="zoom-in-left"
        className="flex  p-2 cursor-pointer duration-300  hover:bg-white  ring-2 ring-slate-500 rounded space-x-8 ">
          <Image src={assets.nod} alt="nodejs  " className="w-8 " />
          <h4>NodeJS</h4>
        </div>
        <div
        data-aos="zoom-in-down"
        className="flex  p-2 cursor-pointer duration-300  hover:bg-white  ring-2 ring-slate-500 rounded space-x-8 ">
          <Image src={assets.tail} alt="tailwind " className="w-8  " />
          <h4>Tailwind CSS</h4>
        </div>
        <div 
        data-aos="zoom-in-down"
        className="flex  p-2 cursor-pointer duration-300  hover:bg-white  ring-2 ring-slate-500 rounded space-x-8 ">
          <Image src={assets.css} alt="css " className="w-8  " />
          <h4>CSS</h4>
        </div>
        <div
        data-aos="zoom-in-right"
        className="flex  p-2 cursor-pointer duration-300  hover:bg-white  ring-2 ring-slate-500 rounded space-x-8">
          <Image src={assets.html} alt="html logo " className="w-8   " />
          <h4>HTML</h4>
        </div>
      </div>
    </div>
  );
};

export default Skills;
