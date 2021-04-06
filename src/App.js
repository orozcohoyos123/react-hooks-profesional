import React, { useContext } from 'react';
import Header from './components/Header';
import Characters from './components/Characters';
import ThemeContext from './context/ThemeContext';
import './App.css';

function App() {
  const [ darkmode ] = useContext(ThemeContext);

  return (
    <div className={`App ${darkmode ? "App--dark" : "" }`}>
      <Header></Header>
      <Characters darkmode={darkmode}></Characters>
    </div>
  );
}

export default App;
