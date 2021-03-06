import React, { useState, useReducer, useMemo, useRef, useCallback } from "react";
import useCharacters from '../hooks/useCharacters';
import Search from './Search';
import './styles/Characters.css';

const initialState = {
  favorites: []
}

const API = "https://rickandmortyapi.com/api/character/";

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
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState('');
  const searchInput = useRef(null);

  const characters = useCharacters(API);

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

  /*   const handleSearch = () => {
    //setSearch(event.target.value) //es posible trabajar con el event, pero a medida que crece el formulario se vuelve tedioso
    setSearch(searchInput.current.value)
  }
 */

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value)
  }, [])

  /* 
  const filteredUsers = characters.filter(user => {
    return user.name.toLowerCase().includes(search.toLocaleLowerCase());
  }) 
  */

  const filteredUsers = useMemo(() => 
    characters.filter(user => {
      return user.name.toLowerCase().includes(search.toLocaleLowerCase());
    }),
    [characters, search] 
  );
  
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
      <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />
      <hr/>
      <div className="Character">
        {filteredUsers.map((character) => (
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
