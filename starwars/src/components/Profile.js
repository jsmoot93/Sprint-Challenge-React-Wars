import React from 'react';
import './StarWars.css';

function Profile(props) {
    return (
        <div className="character-card">
            <div className="character-info">
              <h3>{props.characterProp.name}</h3>
              <p>
                <strong>Faction:</strong> {props.characterProp.faction}
              </p>
              <p>
                <strong>Quote:</strong> {props.characterProp.quote}
              </p>
            </div>
        </div>
    );
  }
  
  export default Profile;
  