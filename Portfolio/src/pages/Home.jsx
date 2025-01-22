import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import HeroSection from "./../Components/HeroSection";
import { CardList } from "../Components/Projectss";


import { RevealBento } from "../Components/gridAbout";

import SkillsSection from "../Components/SkillSection";
import Footer from './../Components/resumeDtl';
import CustomCursor from "../Components/textCircleanimat";
import HoverButtons from "../Components/GIthubbtn";
import NormalBtn from "../Components/Normalbtn";
import { SlideTabsNav } from "../Components/Animations/SlideBar";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useGSAP(() => {
    gsap.utils.toArray("circle").forEach((circle, index) => {
      gsap.fromTo(
        circle,
        { y: 800 },
        {
          y: -900,
          duration: 3 + index,
          repeat: -1,
        }
      );
    });
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen overflow-hidden relative">
      {/* <BackgroundComp/>  */}
      <SlideTabsNav/>
      <div>
      <CustomCursor/>
      </div>
      
      <div className="md:mt-40">
        <HeroSection />
      </div>
      <div className="min-h-[200px] place-content-center  p-4">
        <NormalBtn />
      </div>

      <div className="" id="About">
        <RevealBento />
      </div>
      <div>
      <hr className="h-px my-8  border-0 dark:bg-white"/>

      </div>

      <div className="lg:-mt-60" id="work">
        <CardList />

       
        <HoverButtons/>
      </div>

      <SkillsSection />
      <Footer/>
    </div>
  );
};

// const WrappedHome = transitionPage(Home);
// export default WrappedHome;
export default Home
