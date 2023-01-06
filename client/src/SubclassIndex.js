import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import DatabaseNav from "./DatabaseNav"
import InDevelopment from "./InDevelopment";


function SubclassIndex() {


    return(
        <div>
            <DatabaseNav/>
            <InDevelopment/>
        </div>
    )
}

export default SubclassIndex