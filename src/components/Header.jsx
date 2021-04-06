import React, { useContext } from "react";
import './styles/Header.css';
import ThemeContext from '../context/ThemeContext';

const Header = () => {
  const [ darkmode, setDarkMode ]= useContext(ThemeContext);

  const handleClick = () => {
    setDarkMode(!darkmode);
  }

   return (
    <div className="Header">
      <h1>React Hooks</h1>
      <button 
        type="button" 
        className={`Header__button${darkmode ? "--dark" : ""}`} 
        onClick={handleClick}>
          {darkmode ? 'Dark Mode' : 'Light Mode'}
      </button>
    </div>
  );
};

export default Header;
