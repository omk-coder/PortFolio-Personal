import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

export function SimpleCard() {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(index === activeCard ? null : index); // Toggle active state
  };

  return (
    <section className="">
      <div className="max-w-screen-xl  px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 flex flex-col justify-center lg:h-screen">
        <div
          className="grid grid-cols-1 gap-6 list-none md:grid-cols-3 lg:mt-24 max-w-7xl mx-auto"
          role="list"
        >
          {[
            {
              id: 1,
              title: "TracDocs",
              description:
                "Designed a clean, user-friendly interface for seamless navigation.",
              github: "https://github.com/omk-coder/pRactice-mern",
              link: "https://tracodocs.vercel.app/",
              backgroundImage:
                "https://poly-screenshots.wellfound.com/Project/a0/1496915/81161525b25c706b008ab933a6619bbf-original.png",
              hoverColor: "group-hover:text-orange-500",
            },
            {
              id: 2,
              title: "Chain-Checkmate",
              description: "Decentralized Web3 chess game on Flow network.",
              github: "https://github.com/omk-coder/final-project",
              link: "https://final-project-tawny-alpha.vercel.app/",
              backgroundImage:
                "https://final-project-tawny-alpha.vercel.app/imgs/chessBoardMultiplayerNew.png",
              hoverColor: "group-hover:text-indigo-400",
            },
            {
              id: 3,
              title: "Insight",
              description:
                "Built a MERN-based news and blog platform with a dynamic and user-friendly interface, ensuring real-time content updates.",
              github: "https://github.com/omk-coder/Insight",
              link: "https://onlyinsight.vercel.app/",
              backgroundImage:
                "https://i.pinimg.com/564x/fa/4f/cf/fa4fcfd2db636f98eb0f2b5aecce0c28.jpg",
              hoverColor: "group-hover:text-cyan-400",
            },
          ].map((card, index) => (
            <article
              key={card.id}
              className={`mx-auto shadow-xl bg-cover bg-center h-96 w-full md:w-80 lg:w-96 relative border-8 border-black transform duration-500 group ${
                activeCard === index
                  ? "scale-105"
                  : activeCard !== null
                  ? "translate-x-4 opacity-80"
                  : ""
              }`}
              style={{
                backgroundImage: `url('${card.backgroundImage}')`,
              }}
              onClick={() => handleCardClick(index)}
            >
              <div className="bg-black relative h-full group-hover:bg-opacity-0 flex flex-wrap flex-col justify-end hover:bg-opacity-75 transform duration-300">
                <div className="bg-black p-6 flex flex-col justify-end">
                  <h1
                    className={`text-white mt-2 text-xl mb-3 uppercase group-hover:translate-y-0 duration-300 ${card.hoverColor}`}
                  >
                    {`${card.id.toString().padStart(2, "0")}⏤ ${card.title}`}
                  </h1>
                  <p className="opacity-0 text-white text-base group-hover:opacity-80 transform duration-500">
                    {card.description}
                  </p>
                </div>
                <div className="flex justify-center items-center mt-4 gap-5 bg-black min-w-full p-2">
                  <a
                    href={card.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl hover:text-gray-400"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-white hover:text-blue-600 text-lg "
                  >
                    Live Preview
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
