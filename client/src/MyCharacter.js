import React, {useEffect, useState} from "react";

function MyCharacter({currentUser}) {

    const [userCharacters, setUserCharacters] = useState()

    useEffect(() =>{
        fetch(`http://localhost:3000//user/${currentUser.id}/user_characters`)
        .then(r => r.json())
        .then(userCharacterData => setUserCharacters(userCharacterData))
    })

    return(
        <div>

        </div>
    )
}