// Home.js

import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" />


const Home = () => {
  return (
    <div className="home-container">
      <h2>Selamat datang di Halaman Utama!</h2>
      <p>Temukan tempat impianmu bersama kami.</p>
      <img
        className="home-image"
        src="https://placekitten.com/800/400" 
        alt="Perjalanan Impian"
      />
      <p>Temukan destinasi menarik, rencanakan perjalananmu, dan nikmati pengalaman tak terlupakan.</p>
      <Link to="/Destination" className="cta-button">
        Jelajahi Sekarang
      </Link>
    </div>
  );
};

export default Home;
