// App.js

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import Navbar from './Pages/navbar';
import Home from './Pages/Home';
import Destination from './Pages/Destination';
import FAQ from './Pages/FAQ';
import About from './Pages/About';
import Profile from './Pages/Profile';
import './App.css';
// import OpenTripMap from './Components/OpenTripMap'
// import FAQDetail from './Pages/FAQDetail';


function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Navbar></Navbar>
        </header>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="navbar" exact element={<Navbar />} />
          <Route path="/Destination" element={<Destination />} />
          <Route path="/FAQ" element={<FAQ  />} />
          {/* <Route path="/FAQ-Detail/1" element={<FAQDetail  />} />
          <Route path="/FAQ-Detail/2" element={<FAQDetail />} /> */}
          <Route path="/About" element={<About />} />
          <Route path="/Profile" element={<Profile />} />
          {/* <Route path="/OpenTripMap" element={<OpenTripMap />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
