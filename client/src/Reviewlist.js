import React from "react";
import Reviewcard from "./Reviewcard";


function Reviewlist({reviews}) {

    return (
        reviews ?
        <>
        <button>Leave your own review ➡</button>   
            <header>Check Out the Campaign Reviews Below!</header>
            {reviews.map(review => <Reviewcard key={review.id} review={review} />)}
        </>
:
    <p>Loading...</p>)
    }
    
    export default Reviewlist;