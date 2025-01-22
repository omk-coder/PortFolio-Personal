import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const SlideTabsNav = () => {
  const container = (delay) => ({
    hidden: { y: -100, opacity: 0 },
    visible: { y: 10, opacity: 1, transition: { duration: 0.6, delay: delay } },
  });
  return (
    
   
    <motion.div variants={container(0)}
    initial="hidden"
    animate='visible' className="  flex  items-center justify-between gap-1 fixed top-0 left-0 right-0 z-50 mt-5 ml-1 mr-2  " >
      
      <div  className="   text-white text-3xl sm:text-3xl md:text-5xl  md:ml-6 font-fira">
        OR.
      </div>
      
     
      <SlideTabs />
    </motion.div>
    

  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="backdrop-blur-3xl  bg-white/100 relative mx-auto flex w-fit rounded-full border-2 border-white  p-[3px] font-fira"
    >
        
      <Tab setPosition={setPosition} sectionId="About">About</Tab>
      <Tab setPosition={setPosition} sectionId="work">Projects</Tab>
      <Tab setPosition={setPosition} sectionId="Skills">Skills</Tab>
      <Tab setPosition={setPosition} sectionId="Resume">Resume</Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition, sectionId }) => {
  const ref = useRef(null);

  const handleClick = () => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      onClick={handleClick} // Handle click for smooth scrolling
      className="relative z-10 block cursor-pointer px-1.5 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-white md:h-12"
    />
  );
};
