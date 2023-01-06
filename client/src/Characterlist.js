import React from "react";
import CharacterCard from "./CharacterCard";

function CharacterList({characters, campaignReview}) {

    return (
        characters ?
        <div>
            
            <header>Select a Pre-Generated Character Below!</header>
            {characters.map(character => <CharacterCard key={character.id} campaignReview={campaignReview} character={character} />)}
        </div>
:
    <p>Loading...</p>)
    }
    
    export default CharacterList;