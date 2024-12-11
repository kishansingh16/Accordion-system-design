import React, { useState } from 'react'

const AccordionItem = ({title,content,IsOpen,setIsOpen}) => {
//    const[IsOpen,setIsOpen]=useState(false)

  return (
    <div className='border border-black'>
        <div className='font-bold p-2 bg-slate-200 flex justify-between cursor-pointer' onClick={()=>{setIsOpen(IsOpen=>!IsOpen)}}>
            <span>{title}</span>
            <span>+</span>
        </div>
       {IsOpen && <div className='p-2'>{content}</div>}
    </div>
  )
}

export default AccordionItem
