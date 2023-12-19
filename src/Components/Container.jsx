import "./Container.css"
 import React from 'react'
import HeadPart from "./HeadPart"
 
 function Container() {
   return (
     <div className="w-[28%] h-[60%] overflow-y-auto flex flex-col bg-neutral-700 p-2 rounded-2xl" >
        <HeadPart btnName="ADD" />      
     </div>
   )
 }
 
 export default Container