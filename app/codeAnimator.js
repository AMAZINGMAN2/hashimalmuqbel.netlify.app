"use client";
import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { motion } from "framer-motion";

const skillset = " 'DSA', 'ML', 'Python', 'C++', 'C#', 'JavaScript'";

const CodeAnimator = () => {
  const [skills, setSkills] = useState([]);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [isPausing, setIsPausing] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isPausing) return;
      
      if (!isAnimationComplete) {
        if (currentSkillIndex < skillset.length - 1) {
          setSkills(prev => [...prev, skillset[currentSkillIndex + 1]]);
          setCurrentSkillIndex(prevIndex => prevIndex + 1);
        } else {
          setIsAnimationComplete(true);
          setIsPausing(true);
          setTimeout(() => {
            setSkills([]);
            setCurrentSkillIndex(0);
            setIsAnimationComplete(false);
            setIsPausing(false);
          }, 5000); // Pause duration after animation completion
        }
      }
    }, 55); // Time to display each skill

    return () => clearTimeout(timer);
  }, [currentSkillIndex, isPausing, isAnimationComplete]);

  const code = `#include <iostream>
#include <vector>

class Hashim {
public:
    std::string name = "Master Programmer";
    std::vector<std::string> skills = {};
    skills = {${skills.join("")}};
    bool hardWorker = true;
    bool problemSolver = true;

    bool isQualified() {
        return hardWorker && problemSolver && skills.size() >= 6;
    }
};`;

  return (
    <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-10 space-y-6 lg:space-y-0">
      {/* Text Section */}
      <motion.div className="flex-1" initial={{ opacity: 0, y : -50}} animate={{ opacity: 1, y : 0}} transition={{ duration: 1.3 }}>
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold leading-normal mx-[5vw]">
            <span className="bg-gradient-to-r from-blue-600 via-violet-500 to-green-500 text-transparent bg-clip-text">
              Empowering
            </span>{" "}
            Tomorrows <br />{" "}
            <span className="bg-gradient-to-r from-pink-600 via-violet-700 to-purple-800 text-transparent bg-clip-text">
              Innovations
            </span>{" "}
            Through{" "}
            <span className="bg-gradient-to-br from-blue-600 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Creativity!
            </span>
          </h1>
        </div>
      </motion.div>

      {/* Code Block */}
      <div className="flex-1 lg:mt-0 mt-6 px-4 sm:px-6 md:px-12 lg:px-16 overflow-x-hidden">
        <motion.div
          className="rounded-xl shadow-xl  shadow-purple-500/30 w-full lg:w-[650px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-[0.48rem] sm:text-[0.48rem] md:text-[0.7rem] lg:text-base">
            <SyntaxHighlighter
              language="cpp"
              style={dracula}
              showLineNumbers={true}
              wrapLines={false}
              customStyle={{
                borderRadius: "0.5em",
                maxWidth: "100%", // Ensure it doesn't overflow the container
                overflowX: "auto" // Allow horizontal scroll if needed
              }}
            >
              {code}
            </SyntaxHighlighter>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CodeAnimator;