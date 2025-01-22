import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";

const HoverButtons = () => {
  return (
    <div className="flex justify-center items-center -space-x-3">
      <motion.a
        href="https://github.com/omk-coder"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-12 h-12 border-2 border-white rounded-full"
        whileHover={{
          scale: 1.1,
          x: -10,
        }}
        whileTap={{ scale: 0.95 }}
      >
        <FaGithub className="text-white text-lg" />
      </motion.a>

      <motion.a
        href="https://github.com/omk-coder"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-12 h-12 bg-white text-black rounded-full"
        whileHover={{
          scale: 1.1,
          x: 10,
        }}
        whileTap={{ scale: 0.95 }}
      >
        <FiArrowUpRight className="text-lg" />
      </motion.a>
    </div>
  );
};
export default HoverButtons;
