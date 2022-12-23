import React from "react";
import { NavLink } from "react-router-dom";

function Reviewcard({review}) {
console.log(review)




    return (
        <div>
            <header>{review.campaign_title}</header>
            <h3>{review.star_rating}</h3>
            <h2>-{`${review.user.first_name} ${review.user.last_name}`}</h2>
            <NavLink to={`/review/${review.id}`}>
                <h3>See How it Went! ➡</h3>
            </NavLink>
        </div>
    )

}

export default Reviewcard