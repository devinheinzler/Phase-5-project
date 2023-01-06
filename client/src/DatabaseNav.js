import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ClassIndex from "./ClassIndex";
import RaceIndex from "./RaceIndex";
import Monsters from "./Monsters";
import RuleIndex from "./RuleIndex";
import SubclassIndex from "./SubclassIndex";

function DatabaseNav() {


    return (
        <div>
                        <div className="database-nav">
                <ul>
                <NavLink to={`/ClassIndex`}>
                        <button>Classes</button>
                    </NavLink>
                    <NavLink to={`/RaceIndex`}>
                        <button>Races</button>
                    </NavLink>
                    <NavLink to={`/SubclassIndex`}>
                        <button>Subclasses</button>
                    </NavLink>
                    <NavLink to={`/Monsters`}>
                        <button>Monsters</button>
                    </NavLink>
                    <NavLink to={`/RuleIndex`}>
                        <button>Game Rules</button>
                    </NavLink>
                </ul>
            </div>
        </div>
    )
}

export default DatabaseNav