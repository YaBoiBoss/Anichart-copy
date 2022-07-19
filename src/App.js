
import './App.css';
import React from "react"
import data from "./data.json"
import { useEffect, useState } from 'react';

import Navbar from './components/Navbar';
import Main from './components/Main';

const media = data.media.sort((a,b) => {
  return b.popularity - a.popularity
})


function App() {

  const [darkMode,setDarkMode] = useState(false)

  useEffect(()=>{
    darkMode ? document.body.classList.add("dark") : document.body.classList.remove('dark');
  },[darkMode])

  return (
    <div className="App">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Main media={media} darkMode={darkMode}/>
    </div>
  );
}

export default App;
