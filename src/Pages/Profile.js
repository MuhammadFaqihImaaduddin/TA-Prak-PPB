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
          src="Screenshot 2023-11-25 162945.png"
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
