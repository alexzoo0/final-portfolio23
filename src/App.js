import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Navbar from './components /Navbar/navbar.js';
import Home from './components /Home/Home.js';
import CLine from './components /CommandLIne/cLine.js';


const App = () => {


  return (

  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/commandLine' element={<CLine />} />
    </Routes>
  </BrowserRouter>
  )

}

export default App;
