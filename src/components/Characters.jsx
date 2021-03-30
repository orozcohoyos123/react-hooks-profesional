import React, { useState, useEffect } from "react";
import './styles/Characters.css';

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className="Character">
      {characters.map((character) => (
        <div className="Character__info">
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
        </div>
      ))}
    </div>
  );
};

export default Characters;
