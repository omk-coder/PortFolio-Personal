import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight, FiActivity, FiAlertCircle } from "react-icons/fi";
import { motion } from "framer-motion";

const NormalBtn = () => {
  return (
    <div className="flex justify-center items-center -space-x-3">
      {/* GitHub Button */}
      <motion.div
        className="relative flex items-center justify-center w-12 h-12 border-2 border-white rounded-full"
        whileHover={{
          scale: 1.1,
          x: -10,
        }}
        whileTap={{ scale: 0.95 }}
      >
        <FiActivity className="text-white text-lg" />
      </motion.div>

      {/* External Link Button */}
      <motion.div
        className="relative flex items-center justify-center w-12 h-12 bg-white text-black rounded-full"
        whileHover={{
          scale: 1.1,
          x: 10,
        }}
        whileTap={{ scale: 0.95 }}
      >
        <FiAlertCircle className="text-lg" />
      </motion.div>
    </div>
  );
};
export default NormalBtn;
