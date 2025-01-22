import React, { useRef, useEffect } from "react";
import ButtonWrapper from "./LaterUseComponents/ButtonWr";

import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 10, opacity: 1, transition: { duration: 0.6, delay: delay } },
});
const rightcontainer = (delay) => ({
  hidden: { x: 100, opacity: 0 },
  visible: { x: -10, opacity: 1, transition: { duration: 0.6, delay: delay } },
});

const HeroSection = () => {
  return (
    <div className="ml-7 md:mr-3 relative" id="Home">
      <div className="md:flex mt-[120px] gap-14 items-center lg:ml-[80px] lg:gap-[90px]">
        <div className="">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className=" text-white text-4xl font-fira font-extrabold md:text-7xl lg:text-8xl  "
          >
            Full-stack
          </motion.h1>
        </div>
        <motion.div
          variants={rightcontainer(1)}
          initial="hidden"
          animate="visible"
          className="hidden md:block "
        >
          <a href="#work">
            <ButtonWrapper />
          </a>
        </motion.div>
      </div>
      <div className="md:flex mt-[20px] ml-[80px] md:ml-[20px] gap-14 md:gap-[40px] lg:gap-[30px] lg:mr-[20px] lg:ml-9 items-center">
        <motion.div
          variants={container(1)}
          initial="hidden"
          animate="visible"
          className="hidden md:block font-fira"
        >
          <p className="mt-4 text-lg lg:text-2xl text-[#888686]">
            My goal is to{" "}
            <i>
              <span className="text-white font-medium">
                turn ideas into reality
              </span>{" "}
            </i>
            and write{" "}
            <i>
              <span className="text-white font-medium">
                maintainable, clean, understandable code
              </span>{" "}
            </i>
          </p>
        </motion.div>
        <div className="">
          <motion.h1
            variants={rightcontainer(0)}
            initial="hidden"
            animate="visible"
            className=" text-white text-4xl font-fira font-extrabold md:text-7xl  lg:text-8xl"
          >
            Developer
          </motion.h1>
        </div>
      </div>
      <motion.div
        variants={rightcontainer(0.9)}
        initial="hidden"
        animate="visible"
        className="sm:hidden font-fira"
      >
        <p className="mt-7 mr-4 text-xl lg:text-2xl text-[#888686]">
          My goal is to{" "}
          <i>
            <span className="text-white font-medium">
              turn ideas into reality
            </span>{" "}
          </i>
          and write{" "}
          <i>
            <span className="text-white font-medium">
              maintainable, clean, understandable code
            </span>{" "}
          </i>
        </p>
      </motion.div>
      <motion.div
        variants={rightcontainer(1)}
        initial="hidden"
        animate="visible"
        className="mt-4 p-3 ml-6 sm:hidden"
      >
        <a href="#work">
          <ButtonWrapper />
        </a>
      </motion.div>
    </div>
  );
};

export default HeroSection;
