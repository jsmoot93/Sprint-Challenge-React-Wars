import React from 'react';
import './StarWars.css';
import Profile from './Profile';

const characters = [
    {
        name: 'Luke Skywalker',
        faction: 'Jedi',
        quote: "I used to bullseye womp rats in my T-16 back home, they're not much bigger than two meters."
    },
    {
        name: 'Darth Vader',
        faction: 'Sith',
        quote: 'I am your father.'
    },
    {
        name: 'Yoda',
        faction: 'Jedi',
        quote: 'Fear leads to anger, anger leads to hate, hate leads to suffering.'
    },
    {
        name: 'Admiral Ackbar',
        faction: 'Rebel Alliance',
        quote: "IT'S A TRAP!!!!"
    },
]

function StarwarsCharacters() {
    return (
      <div className="StarwarsCharacters-wrapper">
        <h1>Star Wars Characters:</h1>
  
        <div className="cast-list">
          {characters.map((characterFromMap, index) => (
            <Profile key={index} characterProp={characterFromMap} />
          ))}
        </div>
      </div>
    );
  }
  
  export default StarwarsCharacters;  