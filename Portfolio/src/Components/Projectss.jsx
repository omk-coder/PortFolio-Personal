import React from 'react'; 
import { SimpleCard } from './ProjectProps'; 
import { motion } from "framer-motion";

export function CardList() {
  return (
    <motion.div  whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration: 1.5}} className="mt-16 lg:mt-32"> {/* Add margin-top for larger screens */}
      <div className="flex justify-center">
        <SimpleCard />
      </div>
    </motion.div>
  );
}


