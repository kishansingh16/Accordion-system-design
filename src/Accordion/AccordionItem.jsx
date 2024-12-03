import React from 'react';



const AccordionItem = ({ title, body ,IsOpen,setIsOpen}) => {


  return (
    <div className="border rounded mb-2 overflow-hidden">
      <div 
        className="font-bold p-2 bg-slate-200 flex justify-between cursor-pointer" 
        onClick={()=>{
          setIsOpen((IsOpen)=>!IsOpen);
          }}
      >
          <span>{title}</span>
          <span className=''>🔽</span></div> 
      {
        IsOpen &&
        <div className="p-2 bg-white">{body}</div>
      }
     
    </div>
  );
};

export default AccordionItem;
