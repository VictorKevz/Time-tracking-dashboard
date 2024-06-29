import React from "react";
import "./css/userProfile.css";
import jeremyIMG from "../assets/images/image-jeremy.png";

function UserProfile({ onChange, selectedOption }) {
  const options = [
    { id: "daily-option", value: "daily", label: "Daily" },
    { id: "weekly-option", value: "weekly", label: "Weekly" },
    { id: "monthly-option", value: "monthly", label: "Monthly" }
  ];

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
          <h1 className="header-title">Jeremy Robson</h1>
        </div>
      </div>
      <div className="fields-container">
        {options.map((option) => (
          <div className="field" key={option.id}>
            <input
              type="radio"
              id={option.id}
              name="timeframes"
              value={option.value}
              checked={selectedOption === option.value}
              onChange={onChange}
            />
            <label htmlFor={option.id}>{option.label}</label>
          </div>
        ))}
      </div>
    </header>
  );
}

export default UserProfile;