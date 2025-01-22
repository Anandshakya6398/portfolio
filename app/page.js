"use client";
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from "@/components/About";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import MyProject from "@/components/MyProject";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";



export default function Home() {
 
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])

  return (
    <>
 {/* <Spinner/> */}
<Navbar/>
<Header/>
<About/>
<Skills/>
<MyProject/>
<Contact/>
<Footer/>
    </>
  );
}
