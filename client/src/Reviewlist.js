import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import Reviewcard from "./Reviewcard";
import Reviewform from "./Reviewform";

const reviewsUrl = "http://localhost:3000/reviews"
function Reviewlist() {
    const [reviews, setReviews] = useState()

    useEffect(() => {
        fetch(reviewsUrl)
        .then(res => res.json())
        .then(reviewsData => (setReviews(reviewsData)))
    }, [])
    console.log(reviews)
    return (
        reviews ?
        <>
            <header>Check Out the Campaign Reviews Below!</header>
            {reviews.map(review => <Reviewcard key={review.id} review={review} />)}
        </>
:
    <p>Loading...</p>)
    }
    
    export default Reviewlist;