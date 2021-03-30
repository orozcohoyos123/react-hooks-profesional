import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Characters from './components/Characters';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Characters></Characters>
    </div>
  );
}

export default App;
