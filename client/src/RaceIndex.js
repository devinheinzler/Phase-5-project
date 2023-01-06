import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import RaceCard from "./RaceCard";
import DatabaseNav from "./DatabaseNav";

function RaceIndex({races}) {
console.log(races)

    return(
        races ?
        <div>
            <DatabaseNav/>
            <header>Select a race below!</header>
            {races.results.map(eachRace => <RaceCard key={eachRace.id} eachRace={eachRace} />)}
        </div>
        :
        <p>Loading...</p>
    )
}

export default RaceIndex