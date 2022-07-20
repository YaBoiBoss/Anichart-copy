
import './App.css';
import React from "react"
import data from "./data.json"
import { useEffect, useState } from 'react';

import Navbar from './components/Navbar';
import Main from './components/Main';


function App() {

  const [darkMode,setDarkMode] = useState(false)
  const [season,setSeason] = useState("Fall")

  useEffect(()=>{
    darkMode ? document.body.classList.add("dark") : document.body.classList.remove('dark');
  },[darkMode])


  const media = data[season].media.sort((a,b) => {
    return b.popularity - a.popularity
  })

  console.log("media")

  function changeSeason(value){
    setSeason(value)
  }

  return (
    <div className="App">
      <Navbar darkMode={darkMode} currentSeason={season} changeSeason={changeSeason} setDarkMode={setDarkMode}/>
      <Main media={media} darkMode={darkMode}/>
    </div>
  );
}

export default App;
