import React from 'react';
import './StarWars.css';

function Profile(props) {
    return (
        <div className="character-card">
            <div className="character-info">
              <h3>{props.characterProp.name}</h3>
              <p>
                <strong>Gender:</strong> {props.characterProp.gender}
              </p>
              <p>
                <strong>Height:</strong> {props.characterProp.height}
              </p>
              <p>
                <strong>Hair Color:</strong> {props.characterProp.hair_color}
              </p>
              <p>
                <strong>Eye Color:</strong> {props.characterProp.eye_color}
              </p>
              <p>
                <strong>Birth Year:</strong> {props.characterProp.birth_year}
              </p>
            </div>
        </div>
    );
  }
  
  export default Profile;
  