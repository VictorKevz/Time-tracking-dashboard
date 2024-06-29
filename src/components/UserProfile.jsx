import React from "react";
import "./css/userProfile.css";
import "../App.css"
import jeremyIMG from "../assets/images/image-jeremy.png";

function UserProfile({ onChange, selectedOption }) {
  return (
    <header className="header-wrapper">
      <div className="profile-text-container">
        <figure>
          <img
            src={jeremyIMG}
            alt="jeremy profile picture"
            className="profile-pic"
          />
        </figure>
        <div className="profile-text">
          <p className="report-text">Report for</p>
          <h1 className="header-title ">Jeremy Robson</h1>
        </div>
      </div>
      <div className="fields-container">
        <div className="field">
          <input
            type="radio"
            id="daily-option"
            name="timeframes"
            value="daily"
            checked={selectedOption === "daily"}
            onChange={onChange}
          />
          <label htmlFor="daily-option">Daily</label>
        </div>
        <div className="field">
          <input
            type="radio"
            id="weekly-option"
            name="timeframes"
            value="weekly"
            checked={selectedOption === "weekly"}
            onChange={onChange}
          />
          <label htmlFor="weekly-option">Weekly</label>
        </div>
        <div className="field">
          <input
            type="radio"
            id="monthly-option"
            name="timeframes"
            value="monthly"
            checked={selectedOption === "monthly"}
            onChange={onChange}
          />
          <label htmlFor="monthly-option">Monthly</label>
        </div>
      </div>
    </header>
  );
}

export default UserProfile;