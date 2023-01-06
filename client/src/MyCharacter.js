import React, {useEffect, useState} from "react";
import MyCharacterCard from "./MyCharacterCard";
import { NavLink, useNavigate } from "react-router-dom";


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


    const handleDeleteCharacter = (userCharacterId) => {
        console.log(userCharacterId)
        fetch(`http://localhost:3000/user/${currentUser.id}/user_characters/${userCharacterId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        })
        .then(res => res.json())
        .then(res => setUserCharacters(res))
    }


    return(
        userCharacters ?
        <div>
            <header>View Your Characters Below!</header>
            {userCharacters.map(userCharacter => <MyCharacterCard key={userCharacter.id} userCharacter={userCharacter} handleDeleteCharacter={handleDeleteCharacter} />)}
        </div>
        :
        <p>Loading...</p>
    )
}

export default MyCharacter