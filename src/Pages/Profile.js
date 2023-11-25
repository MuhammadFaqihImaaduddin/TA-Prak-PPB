// Profile.js

import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-card">
        <img
          className="profile-image"
          src="https://placekitten.com/200/200" // Ganti dengan URL gambar profil Anda
          alt="Profil"
        />
        <div className="profile-info">
          <h3>Muhammad Faqih Imaaduddin</h3>
          <p>Nomer Telepon: 123-456-7890</p>
          <br></br>
          <p>Email: example@example.com</p>
        </div>
      </div>
      <p>Dibuat dengan tulus</p>
    </div>
  );
};

export default Profile;
