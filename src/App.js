import React from 'react'
import "./App.css"
import Container from './Components/Container'
function App() {
  return (
    <div className="flex justify-center flex-col  h-[100vh] items-center" >
      <h1 className="font-mono font-bold text-5xl mb-10 text-white">ToDo List</h1>
      <Container/>
    </div>
  )
}

export default App