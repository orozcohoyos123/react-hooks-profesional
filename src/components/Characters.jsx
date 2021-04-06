import React, { useState, useEffect, useReducer } from "react";
import './styles/Characters.css';

const initialState = {
  favorites: []
}

const favoriteReducer = (state, action) => {
  switch(action.type){
    case 'ADD_TO_FAVORITE':
      if (state.favorites.filter((favorite) => favorite.id === action.payload.id).length !== 0) {
        return state;
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }
    case 'REMOVE_FROM_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter(favorite => favorite.id !== action.payload)
      }
    default: 
      return state;
  }
}

const Characters = (props) => {
  const [characters, setCharacters] = useState([]);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  const handleClick = favorite => {
    dispatch(
      {type: 'ADD_TO_FAVORITE', payload: favorite}
    )
  }

  const handleRemoveClick = favorite => {
    dispatch(
      {type: 'REMOVE_FROM_FAVORITE', payload: favorite}
    )
  }
  
  return (
    <div className="Container">
      <h3>Favorites Characters</h3>
      <div className="Character Separator">
        {favorites.favorites.map((character) => (
          <div key={character.id} className="Character__container">
            <img src={character.image} alt={character.name} />
            <div className="Character__info">
              <label className="Character__title">{character.name}</label>
              <label className="Character__status">{character.status}</label>
              <label className="Character__origin">{character.origin.name}</label>
            </div>
            <button type="button" onClick={() => handleRemoveClick(character.id)}>Remove from favorites</button>
          </div>
        ))}
      </div>
      <hr/>
      <div className="Character">
        {characters.map((character) => (
          <div key={character.id} className="Character__container">
            <img src={character.image} alt={character.name} />
            <div className="Character__info">
              <label className="Character__title">{character.name}</label>
              <label className="Character__status">{character.status}</label>
              <label className="Character__origin">{character.origin.name}</label>
            </div>
            <button type="button" onClick={() => handleClick(character)}>Add to favorites</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
