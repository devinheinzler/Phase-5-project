import React, {useEffect, useState} from "react";
import MyCharacterCard from "./MyCharacterCard";

function MyCharacter({currentUser}) {

    const [userCharacters, setUserCharacters] = useState()
// console.log(currentUser)
    useEffect(() =>{
        fetch(`http://localhost:3000/user/${currentUser.id}/user_characters`)
        .then(r => r.json())
        .then(userCharacterData => setUserCharacters(userCharacterData))
        // console.log(currentUser)
    }, [])
    console.log(userCharacters)
    return(
        userCharacters ?
        <div>
            <header>View Your Characters Below!</header>
            {userCharacters.map(userCharacter => <MyCharacterCard key={userCharacter.id} userCharacter={userCharacter} />)}
        </div>
        :
        <p>Loading...</p>
    )
}

export default MyCharacter