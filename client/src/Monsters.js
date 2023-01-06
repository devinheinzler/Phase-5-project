import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import DatabaseNav from "./DatabaseNav"
import InDevelopment from "./InDevelopment";


function Monsters() {


    return(
        <div>
            <DatabaseNav/>
            <InDevelopment/>
        </div>
    )
}

export default Monsters