import React from "react";
import { NavLink } from "react-router-dom";
function ClassCard({eachClass}) {


    return (
        <div>
            <h1>{eachClass.name}</h1>
            <NavLink to={`/class/${eachClass.index}`}>
                <button>View Class Details ➡</button>
            </NavLink>
        </div>
    )
}

export default ClassCard