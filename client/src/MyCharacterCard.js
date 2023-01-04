import React from "react";
import { NavLink } from "react-router-dom";

function MyCharacterCard({userCharacter}) {

    return (
        <div>
            <h1>{userCharacter.character_name}</h1>
            <h2>{userCharacter.race_name} {userCharacter.class_name}</h2>
            <img src={userCharacter.character_image} alt="character image"/>
            <NavLink to={`/character/${userCharacter.id}`}>
                <button>View Character Details ➡</button>
            </NavLink>
        </div>
    )

}

export default MyCharacterCard