
import './App.css';
import React,{useState} from "react";
import Header from "./Header.jsx";
import Main from "./Main.jsx";

function App() {
const [num,setnum]=useState(0)
const inc = () =>{
  setnum(num+1)
  console.log(num)
}

  return (
    <>
    <Header num={num} inc={inc} />
    <Main inc={inc} num={num}/>
    </>
  );
}

export default App;
