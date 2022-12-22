import React from "react";
import CharacterCard from "./CharacterCard";

function CharacterList({characters}) {

    return (
        characters ?
        <>
            
            <header>Select a Pre-Generated Character Below!</header>
            {characters.map(character => <CharacterCard key={character.id} character={character} />)}
        </>
:
    <p>Loading...</p>)
    }
    
    export default CharacterList;