import React from 'react';
import './StarWars.css';
import Profile from './Profile';

function StarwarsCharacters(props) {
    return (
      <div className="StarwarsCharacters-wrapper">
        <h1>Star Wars Characters:</h1>
  
        <div className="cast-list">
          {props.starwarsChars.map((characterFromMap) => (
            <Profile characterProp={characterFromMap} />
          ))}
        </div>
      </div>
    );
  }
  
  export default StarwarsCharacters;  