import React from "react";
import './styles/Header.css';

const Header = (props) => {
   return (
    <div className="Header">
      <h1>React Hooks</h1>
      <button type="button" className={`Header__button${props.darkmode ? "--dark" : ""}`} onClick={props.handleClick}>{props.darkmode ? 'Dark Mode' : 'Light Mode'}</button>
    </div>
  );
};

export default Header;
