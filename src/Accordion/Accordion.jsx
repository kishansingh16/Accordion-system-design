import React, { useState } from 'react';
import AccordionItem from './AccordionItem';

const data = [
  {
    title: "What is Github and how does it work?",
    content:
      "GitHub is the home for all developers—a platform where you can share code, contribute to open source projects, or even automate your workflow with tools like GitHub Actions and Packages. If you’re just getting started with GitHub, you may know us best as a place for version control and collaboration.",
  },
  {
    title: "How do I see GitHub's availability?",
    content: "Check our real-time status report",
  },
  {
    title: "Why is GitHub so popular?",
    content:
      "GitHub is built by developers for developers, and we’re proud to be home to the world’s largest open source community. With 50 million developers and millions more open source projects, GitHub has become the go-to place to collaborate and build software together.",
  },
];

const Accordion = () => {
  const [openIndexes, setOpenIndexes] = useState([]); // Track multiple open items

  const toggleIndex = (index) => {
    if (openIndexes.includes(index)) {
      // If the index is already open, remove it
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      // Otherwise, add it to the openIndexes array
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className="w-[50%] m-auto mt">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          IsOpen={openIndexes.includes(index)} // Check if the index is in openIndexes
          setIsOpen={() => toggleIndex(index)} // Toggle the index in the array
        />
      ))}
    </div>
  );
};

export default Accordion;
