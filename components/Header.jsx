import React, { useEffect } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Header = () => {
  return (
    <>
      <div className=" h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-blue-100">
        <div 
        data-aos="zoom-out-down"
          id="top"
          className=" select-none w-11/12 md:pt-10  text-center mx-auto h-screen flex flex-col items-center justify-center gap-23"
        >
          <div
            data-aos="zoom-in"
            // data-aos-easing="ease-out-cubic"
            // data-aos-duration="1000"
          >
            <Image
              src={assets.profile_img}
              alt=""
              className=" rounded-full w-32"
            />
          </div>
          <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Outfit">
            Hi! I'm Anand Kumar
            <Image src={assets.hand_icon} alt="" className="w-6" />
          </h3>
          <h1 
          data-aos="zoom-in"
          className="text-3xl sm:text-6xl lg:text-[66px] font-Outfit">
            {" "}
            Frontend Developer
          </h1>
          <p className="max-w-2xl mx-auto font-Outfit">
            I am a Frontend Web Developer , I build many projects using HTML,
            CSS, JavaScript, React, Redux, and Next.js.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <a
          
              href="#contact"
              className="px-10 py-3 border border-white rounded-full bg-black hover:bg-blue-950 text-white flex items-center gap-2"
            >
              Contact Me
              <Image
                src={assets.right_arrow_bold_dark}
                alt=""
                className="w-4"
              />
            </a>
            <a
        
              href="/sample-resume.pdf"
            target="_blank"
              className="px-10   py-3 border rounded-full border-gray-500 flex items-center gap-2"
            >
              my resume{" "}
              <Image src={assets.download_icon} alt="" className="w-4" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
