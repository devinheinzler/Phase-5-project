import React from "react";
import { NavLink } from "react-router-dom";

function CharacterCard({character}) {
console.log(character)




    return (
        <div className="character-list">
                <h1>{character.character_name}</h1>
            <h2>{character.race_name} {character.class_name}</h2>
            <img src={character.character_image} alt="character image"/>
            <NavLink to={`/character/${character.id}`}>
                <button>View Character Details ➡</button>
            </NavLink>
        </div>
    )

}

export default CharacterCard