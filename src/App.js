
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

  return (
    <div className="App">
      <Navbar/>
      <Main media={media}/>
    </div>
  );
}

export default App;
