"use client";
import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { motion } from "framer-motion";

const skillset = " 'DSA', 'ML', 'Python', 'C++', 'C#', 'JavaScript' ";

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
    bool hardWorker = true, problemSolver = true;

    bool isQualified() {
        return hardWorker && problemSolver && skills.size() >= 6;
    }
};`;

  return (
    <div 
      className="flex flex-col items-start" 
      style={{ position: "relative", top: "-40vh", left: "19vw" }}
    >
      <motion.div
        className="-pb-[30px] rounded-xl shadow-xl shadow-purple-500/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <SyntaxHighlighter
          language="cpp"
          style={dracula}
          showLineNumbers={true}
          wrapLines={true}
          customStyle={{
            borderRadius: "0.5em",
          }}
        >
          {code}
        </SyntaxHighlighter>
      </motion.div>
    </div>
  );
};

export default CodeAnimator;
