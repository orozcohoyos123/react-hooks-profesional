import React, { useState } from "react";

const Header = () => {
  const [darkmode, setDarkMode] = useState(false);
  
  const handleClick = () => {
    setDarkMode(!darkmode);
  }

  return (
    <div className="Header">
      <h1>React Hooks</h1>
      <button type="button" onClick={handleClick}>{darkmode ? 'Dark Mode' : 'Light Mode'}</button>
    </div>
  );
};

export default Header;
