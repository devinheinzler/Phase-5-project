import React from "react";
import { NavLink } from "react-router-dom";

function CharacterCard({character}) {
console.log(character)




    return (
        <div>
            <NavLink to={`/character/${character.id}`}>
                <header>{character.character_name}</header>
            </NavLink>
            <h2>{character.race_name} {character.class_name}</h2>
            <img src={character.character_image} alt="character image"/>
            <NavLink to={`/character/${character.id}`}>
                <h3>View Character Details ➡</h3>
            </NavLink>
        </div>
    )

}

export default CharacterCard