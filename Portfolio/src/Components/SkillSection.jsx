import React from "react";
import { motion } from "framer-motion";
import HoverButtons from './GIthubbtn'

const SkillsSection = () => {
  const skills = [
    {
      category: "Front-end",
      items: [
        "React.js",
        "Redux Toolkit",
        "TypeScript",
        "Next.js",
        'puppeteer', 
      ],
    },
    {
      category: "Styles",
      items: ["SCSS", "Gsap", "Tailwindcss", "Framer-motion", "Material UI"],
    },
    {
      category: "Back-end",
      items: [
        "PostgreSQL",
        "MongoDB",
        "Node.js",
        "Express.js",
        "AI Integration",
        "Docker", 
        "AWS"
      ],
    },
   
  ];

  return (
    <section  className=" text-white py-12 md:py-24 relative" id="Skills">
      {/* Background Pattern */}
      <div className="absolute inset-0 "></div>

      <div className="relative max-w-screen-xl mx-auto px-8">
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
            whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration: 1.5}}
              key={index}
              className="border rounded-br-3xl hover:bg-[#3D3D3D] p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-3xl underline underline-offset-1 font-fira font-semibold mb-4">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-gray-400 underline underline-offset-1 hover:text-white transition-colors text-2xl font-fira"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SkillsSection;