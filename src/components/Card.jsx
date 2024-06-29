import React, { useState } from "react";
import "./css/card.css";
import "../App.css"
import data from "../Data";
function Card({selectedOption}) {
  
  return (
      
      <section className="card-wrapper">
        {data.map((obj) => {
          let currentHrs;
          let prevHrs;
          let timeFrame;
          if (selectedOption === "daily") {
            currentHrs = obj.timeframes.daily.current;
            prevHrs = obj.timeframes.daily.previous;
            timeFrame = "Day";
          } else if (selectedOption === "weekly") {
            currentHrs = obj.timeframes.weekly.current;
            prevHrs = obj.timeframes.weekly.previous;
            timeFrame = "Week";
          } else {
            currentHrs = obj.timeframes.monthly.current;
            prevHrs = obj.timeframes.monthly.previous;
            timeFrame = "Month";
          }

          // Assigning cardClass based on obj.title
          let cardClass = "";
          switch (obj.title) {
            case "Work":
              cardClass = "work";
              break;
            case "Play":
              cardClass = "play";
              break;
            case "Study":
              cardClass = "study";
              break;
            case "Exercise":
              cardClass = "exercise";
              break;
            case "Social":
              cardClass = "social";
              break;
            case "Self Care":
              cardClass = "self-care";
              break;
            default:
              cardClass = "";
          }
          return (
            <div key={obj.id} className={`card ${cardClass}`}>
               <figure className="card-icon-wrapper">
                  <img src={obj.icon} alt="icons" className="card-icon" />
                </figure>
              <div className="card-inner-container">
                <div className="title-dots-container">
                <p className="title">{obj.title}</p>
                <figure>
                  <img src={obj.dots} alt="three dots" className="dots" />
                </figure>
                </div>
                <div className="current-prev-container">
                  <h2 className="current-hrs">{`${currentHrs}hrs`}</h2>
                  <p className="prev-hrs">{`Last ${timeFrame} - ${prevHrs}hrs`}</p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
  );
}
export default Card;
