import React from "react";
import { NavLink } from "react-router-dom";

function Reviewcard({review}) {
console.log(review)




    return (
        <div>
            <h1>{review.campaign_title}</h1>
            <h3>-{review.star_rating}/5 ⭐</h3>
            <h4>-{`${review.user.first_name} ${review.user.last_name}`}</h4>
            <NavLink to={`/review/${review.id}`}>
                <button>See What They Said! ➡</button>
            </NavLink>
        </div>
    )

}

export default Reviewcard