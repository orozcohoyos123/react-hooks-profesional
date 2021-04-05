import React, { useState } from 'react';
import Header from './components/Header';
import Characters from './components/Characters';
import './App.css';

function App() {
  const [darkmode, setDarkMode] = useState(false);
  
  const handleClick = () => {
    setDarkMode(!darkmode);
  }

  return (
    <div className={`App ${darkmode ? "App--dark" : "" }`}>
      <Header darkmode={darkmode} handleClick={handleClick}></Header>
      <Characters darkmode={darkmode}></Characters>
    </div>
  );
}

export default App;
