import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import UserProfile from "./components/UserProfile";
function App() {
  const [selectedOption, setSelectedOption] = useState("weekly");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <main className="outer-container">
      <div className="inner-container">
        <UserProfile selectedOption={selectedOption} onChange={handleChange} />
        <Card selectedOption={selectedOption} />
      </div>
    </main>
  );
}

export default App;
