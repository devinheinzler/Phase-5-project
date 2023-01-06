import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ClassIndex from "./ClassIndex";
import RaceIndex from "./RaceIndex";
import Monsters from "./Monsters";
import RuleIndex from "./RuleIndex";
import SubclassIndex from "./SubclassIndex";
import DatabaseNav from "./DatabaseNav";

function Database() {


    return(
        <div>
            <h1>Welcome to the D&D Database!</h1>
            <DatabaseNav/>
        </div>
    )
}

export default Database