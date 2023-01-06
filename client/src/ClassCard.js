import React from "react";
import { NavLink } from "react-router-dom";
function ClassCard({eachClass}) {


    return (
        <div className="class-card">
            <h1>{eachClass.name}</h1>
            <NavLink to={'/InDevelopment'}>
                <button>View Class Details ➡</button>
            </NavLink>
        </div>
    )
}

export default ClassCard