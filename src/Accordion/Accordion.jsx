import React, { useState } from 'react';
import AccordionItem from './AccordionItem';


const data=[
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
]



const Accordion = () => {

  const [openIndex,setOpenIndex]=useState(2);
  return (
    <div className='w-[50%] m-auto mt-5'>
        {data.map((item,index)=>(
            <AccordionItem 
              key= {index} 
              title={item.title} 
              body={item.content} 
              IsOpen={index === openIndex ? true :false} //FISR ACCRDION TRUE REST CLOSE 
              setIsOpen={()=>{
                index===openIndex ?setOpenIndex(null):setOpenIndex(index)
              }}/>
        ))}
    </div>
  )
}

export default Accordion
