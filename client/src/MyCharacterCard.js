import React from "react";
import { NavLink } from "react-router-dom";

function MyCharacterCard({userCharacter, handleDeleteCharacter}) {

    return (
        <div>
            <h1>{userCharacter.character_name}</h1>
            <h2>{userCharacter.race_name} {userCharacter.class_name}</h2>
            <img src={userCharacter.character_image} alt="character image"/>
            <NavLink to={`/character/${userCharacter.id}`}>
                <button>View Character Details ➡</button>
            </NavLink>
            <button onClick={() => handleDeleteCharacter(userCharacter.id)}>Delete Character ❌</button>
        </div>
    )

}

export default MyCharacterCard