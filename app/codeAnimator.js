'use client';
import { useEffect, useState } from 'react';
import { ShikiMagicMove } from 'shiki-magic-move/react';
import { createHighlighter } from 'shiki';
import 'shiki-magic-move/dist/style.css';

const skillsList = [
  '',
  '\'DSA\'',
  '\'ML\'',
  '\'Python\'',
  '\'C++\'',
  '\'C#\'',
  '\'JavaScript\'',
];

const CodeAnimator = () => {
  const [code, setCode] = useState('');
  const [highlighter, setHighlighter] = useState(null);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [isPausing, setIsPausing] = useState(false);

  useEffect(() => {
    const initializeHighlighter = async () => {
      const highlighter = await createHighlighter({
        themes: ['dracula'], // Use Dracula theme
        langs: ['cpp'],
      });
      setHighlighter(highlighter);
    };

    if (typeof window !== 'undefined') {
      initializeHighlighter();
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      // If currently in pause state, don't update the code or index
      if (isPausing) return;

      // Update the code with current skills
      setCode(prevCode => {
        const updatedSkills = skillsList.slice(1, currentSkillIndex + 1).join(', ');
        return `#include <iostream>\n#include <vector>\n\nclass Hashim {\npublic:\n    std::string name = "Master Programmer";\n    std::vector<std::string> skills = {}\n    skills = {${updatedSkills}};\n    bool hardWorker = true, problemSolver = true;\n\n    bool isQualified() {\n        return hardWorker && problemSolver && skills.size() >= 6;\n    }\n};`;
      });

      // Increment or reset the index
      if (currentSkillIndex < skillsList.length - 1) {
        setCurrentSkillIndex(prevIndex => prevIndex + 1);
      } else {
        setIsPausing(true); // Start pause after the last skill
        setCurrentSkillIndex(0); // Reset index for next loop

        // Pause for a certain duration before resuming
        setTimeout(() => {
          setIsPausing(false); // End pause
        }, 1000); // Adjust pause duration as necessary
      }
    }, 2000); // Time to display each skill

    return () => clearTimeout(timer);
  }, [currentSkillIndex, isPausing]); // Add isPausing to dependency array

  return (
    <div className="flex flex-col items-center">
      {highlighter && (
        <ShikiMagicMove
          lang="cpp"
          theme="dracula" // Ensure theme is set to Dracula
          highlighter={highlighter}
          code={code}
          className='p-4 rounded-xl priority shadow-xl left-[19vw] -top-[45vh] shadow-lg shadow-purple-500/30'
          options={{ duration: 800, stagger: 0.2, lineNumbers: true }}
        />
      )}
    </div>
  );
};

export default CodeAnimator;
