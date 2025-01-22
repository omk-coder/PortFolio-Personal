
import React from 'react'
import rtl from '/rtl.pdf'
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div  whileInView={{opacity:1, y:0}} initial={{opacity:0, y:100}} transition={{duration: 1}} id='Resume' className=' pb-2 -mt-14'>
  <h1 className='underline underline-offset-4 my-6 text-center text-3xl md:text-4xl font-fira text-white'>Get in Touch</h1>
  <div className="flex justify-center">
    <img className='w-24 h-24 rounded-full shadow-lg' src="https://media.licdn.com/dms/image/v2/D4D03AQH408YxaUqmQg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731076011028?e=1743033600&v=beta&t=2kFAmkq3D1pLO0VnmaMlgcjRelzo3b4IiZhRXFdNHsg" alt="no name" />
 
  </div>
  <div className='text-center tracking-tighter'>
    <h2 className='my-4 text-center text-xl font-fira text-white'>Open to Full-time Opportunities and Freelancing projects</h2>
    <div className="flex mt-4 md:mt-6 items-center justify-center">
           <a
             href={rtl}
             target="_blank" 
             rel="noopener noreferrer" 
             className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
           >
             Resume
           </a>
           <a
             href="#"
             className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
           >
             ramishteomkar07@gmail.com
           </a>
         </div>
    
  </div>
</motion.div>

  )
}

export default Footer