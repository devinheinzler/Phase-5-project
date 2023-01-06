import React from "react";
import { NavLink } from "react-router-dom";

function RaceCard({eachRace}) {


    return(
        <div className="race-card">
            <h1>{eachRace.name}</h1>
            <NavLink to={'/InDevelopment'}>
                <button>View Race Details ➡</button>
            </NavLink>
        </div>
    )
}

export default RaceCard