import React, { useState } from 'react'

function ListPart(props) {

  const [doneTask, setDoneTask] = useState("bg-slate-100")
const handleDeleteButton=(e)=>{
  props.deleteClick()
}

const handleDoneButton=(e)=>{
  setDoneTask("bg-green-300")
}





  return (
<>
    
    <div className="bg-neutral-700 flex box-border mt-1 mr-1 pl-1" key={props.todoListItem}>
        <div className={`flex items-center min-h-[50px] w-4/5 font-mono ${doneTask} mr-1 rounded-2xl overflow-auto`}>
        <p className="w-[100%] p-3 break-words ml-2 overflow-clip">{props.todoListItem}</p>
        </div>
        <div className="flex box-border gap-1 mr-1 ml-1">
        <button type="button" onClick={handleDoneButton} className="bg-orange-100 w-20 h-10 self-center rounded-xl font-mono font-bold hover:bg-green-500 duration-[400ms]" name="done">Done</button>
        <button onClick={handleDeleteButton} type="button" className="bg-orange-100 w-20 h-10 self-center rounded-xl font-mono font-bold hover:bg-red-500 duration-[400ms]" name="remove">Remove</button>
        </div>
    </div>
 
  </>
  )
}

export default ListPart