import React, { useState } from 'react'
import ListPart from "./ListPart"
import "./HeadPart.css"
import Error from './Error'



export default function HeadPart(props) {
const [task, setTask] = useState("")
const [taskList, setTaskList] = useState([])
const [ErrorVal, setErrorVal] = useState(true)


const inputValue=(event)=>{
// console.log(event.target.value)
setTask(event.target.value)
}

const addToList=()=>{
  if(task!==""){ 
  taskList.push(task)
  // console.log(taskList)
  setErrorVal(false)
  setTask("")
  }
}

const update=(index,data)=>{
  let updatedList =[...taskList]
  updatedList[index]=data
  // console.log(index,data)
  // console.log(updatedList[index])
  setTaskList(updatedList)
}
const removeFromList=(removeIndex)=>{
  // console.log(removeIndex)
  const updateList = taskList.filter((item,index)=> index!==removeIndex)
console.log(updateList)
  setTaskList(updateList)
  // console.log(updateList)
  // console.log(taskList.length)
  if (updateList.length===0) {
    setErrorVal(true)
  }
}

  return (
    <div className="flex gap-2 flex-col">
    <div className="flex gap-3 justify-between">
        <input className="bg-slate-100 font-mono font-bold w-4/5 h-11 rounded-xl pl-3" type="text" placeholder="Write Some Tasks Here" name="text" onChange={inputValue} value={task}/>
        <button type="button" className="bg-teal-500 hover:bg-teal-400 w-20 rounded-xl mr-3 font-mono font-bold text-lg" onClick={addToList} >{props.btnName}</button>
    </div>
    {ErrorVal && <Error/>}
    <div>
      {taskList.map((item,index)=>(
        <ListPart key={index} index={index} update={update} todoListItem={item}  deleteClick={()=>removeFromList(index)}/>
      ))}
        
    </div>
    </div>
  )
}
