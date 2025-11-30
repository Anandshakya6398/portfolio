"use client";
import { assets, workData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
// import Link from "next/link";

const MyProject = () => {
  const [showAll, setShowAll] = React.useState(false);

  return (
    <div
      id="project"
      className=" bg-gradient-to-r from-indigo-100 via-purple-100 to-blue-100 w-full px-[12%] py-10 scroll-mt-20 select-none"
    >
      <h2 
      data-aos="zoom-in-up"
      className="text-center mb-2 mt-8 md:mt-0 text-4xl font-Cedarville_Cursive">
        My projects
      </h2>
      <p 
      data-aos="zoom-in-down"
      className="text-center max-w-2xl mx-auto font-Outfit mt-5 mb-12">
        Welcome to my web development portfolio! Explore a collection of my
        recent projects below. Click on the project to learn more about the
        technologies used.
      </p>

      {/* <div className="sm:mb-32   pt-10  sm:space-y-10">
        <div className="bg-slate-400 m-auto max-w-3xl rounded-lg">
          <div className="relative   ">
            <Image src={assets.coffee} alt="coffee" className="rounded-lg " />
            <div className=" sm:flex ">
              <div className="leading-7 text-center ">
                <h2 className="font-bold pt-6">Coffee-Shop Website</h2>
                <p className="sm:px-10 font-semibold  px-0">
                  Using Reactjs,Redux,Tailwind CSS,HTML
                </p>
              </div>
              <div className="mb-6 flex gap-4 px-20 sm:pt-8  pt-4 ">
                <a href="https://github.com/Anandshakya6398/coffee-cafe" target="_blank">
                  <Image src={assets.githb} alt="" className="w-8 hover:scale-105 pb-2" />
                </a>
                <a href="https://anand-coffee-cafe.netlify.app" target="_blank">
                  <Image src={assets.send_icon} alt="" className="w-8 hover:scale-110 pb-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-400 m-auto max-w-3xl rounded-lg">
          <div className="relative   ">
            <Image src={assets.coffee} alt="coffee" className="rounded-lg " />
            <div className=" sm:flex ">
              <div className="leading-7 text-center ">
                <h2 className="font-bold pt-6">Coffee-Shop Website</h2>
                <p className="sm:px-10 font-semibold px-0">
                  Using Reactjs,Redux,Tailwind CSS,HTML
                </p>
              </div>
              <div className="mb-6 flex gap-4 px-20 sm:pt-8  pt-4 ">
                <a href="https://github.com/Anandshakya6398/coffee-cafe" target="_blank">
                  <Image src={assets.githb} alt="" className="w-8 hover:scale-105 pb-2" />
                </a>
                <a href="https://anand-coffee-cafe.netlify.app" target="_blank">
                  <Image src={assets.send_icon} alt="" className="w-8 hover:scale-110 pb-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div
        data-aos="zoom-in-down"
        className="grid pb-10  min-[730px]:grid-cols-2 lg:grid-cols-3  my-12 gap-5"
      >
        {workData
          .slice(0, showAll ? workData.length : 3)
          .map((project, index) => (
            <div
              key={index}
              className="aspect-square bg-no-repeat bg-cover  border rounded-lg border-black     shadow-[2px_2px_0_#000] group-hover:bg-green-400 transition bg-white    relative cursor-pointer   group"
              style={{ backgroundImage: `url(${project.bgImage})` }}
            >
              <div className="bg-white w-[95%] h-[15vh] rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-3 flex items-center justify-between  duration-500 group-hover:bottom-7">
                <div>
                  <h2 className="font-semibold">{project.title}</h2>
                  <p className="text-sm text-wrap font-Cedarville_Cursive text-gray-700">
                    {project.description}
                  </p>
                </div>

                <div className=" flex items-center space-x-2 w-24 ">
                  <div className="w-10  border-darkHover hover:bg-green-400 rounded-full flex items-center justify-center  transition bg-white">
                    <a href={project.url} target="_blank">
                      {" "}
                      <Image src={assets.send_icon} alt="" className="w-8" />
                    </a>
                  </div>
                  <div className="hover:scale-110 ">
                    <a href={project.git} target="_blank">
                      {" "}
                      <Image src={assets.githb} alt="" className="w-8 " />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div>
        <button
          onClick={() => setShowAll(!showAll)}
          className="w-max mb-10 flex items-center justify-center gap-2 text-gray-700 border-[.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-6 hover:bg-lightHover duration-500"
        >
          {showAll ? "Show less" : "See more"}
          <Image src={assets.right_arrow_bold} alt="right-arrow" className="w-4 " />
        </button>
      </div>

      {/* <div>
{
  status ?  <div className="grid  grid-cols-auto gap-5 mt-4 ">
  {workData.map((project, index) => (
      <div
        key={index}
        className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
        style={{ backgroundImage: `url(${project.bgImage})` }}
      >
        <div className="bg-white w-11/12 h-[20vh] rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between  duration-500 group-hover:bottom-7">
          <div>
            <h2 className="font-semibold">{project.title}</h2>
            <p className="text-sm text-gray-700">{project.description}</p>
          </div>

          <div className=" flex items-center space-x-2 w-28 ">
            <div className="w-10  border-darkHover hover:bg-green-400 rounded-full flex items-center justify-center  transition bg-white">
              <a href={project.url} target="_blank">
                {" "}
                <Image src={assets.send_icon} alt="" className="w-8" />
              </a>
            </div>
            <div className="hover:scale-110">
              <a href={project.git} target="_blank">
                {" "}
                <Image src={assets.githb} alt="" className="w-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div> :null
}
    <button onClick={() => setStatus(!status)} className="w-max flex items-center justify-center gap-2 text-gray-700 border-[.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500">
      {
      status ? "Less Now" : "Show More"
}
      <Image
        src={assets.right_arrow_bold}
        alt="right-arrow"
        className="w-4 "
      />
    </button>
      </div> */}
    </div>
  );
};

export default MyProject;

// border rounded-full border-black  aspect-square   justify-center shadow-[2px_2px_0_#000] group-hover:bg-green-400 transition w-10 bg-white"
