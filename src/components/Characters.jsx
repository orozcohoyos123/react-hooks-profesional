import React, { useState, useEffect } from "react";
import './styles/Characters.css';

const Characters = (props) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className="Character">
      {characters.map((character) => (
        <div key={character.id} className="Character__container">
          <img src={character.image} alt={character.name} />
          <div className="Character__info">
            <label className="Character__title">{character.name}</label>
            <label className="Character__status">{character.status}</label>
            <label className="Character__origin">{character.origin.name}</label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;
