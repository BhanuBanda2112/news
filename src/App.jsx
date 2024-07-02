
import { useState } from "react"
import { Navbar } from "./components/Navbar"
import { Newscard } from "./components/Newscard"
import { Board } from "./components/board"



function App() {
  
  const [category, setcategory]=useState("general");


  return (
    <>
   
    <Navbar  setcategory={setcategory}/>
    
   <Board  category={category} />
    </>
  )
}

export default App
