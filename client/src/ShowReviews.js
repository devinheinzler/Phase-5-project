import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const reviewUrl = "http://localhost:3000/reviews"

function ShowReviews() {
    const {id} = useParams()
    const [review, setReview] = useState(null)

    useEffect(() => {
        fetch(`${reviewUrl}/${id}`)
        .then(res => res.json())
        .then(reviewDetails => setReview(reviewDetails))
    }, [])

    return(
        review ?
        <div>
            <h2>Campaign Title:</h2>
            <p>{review.campaign_title}</p>
            <h2>How it Went:</h2>
            <p>{review.review_content}</p>
            <h3>Rating:</h3>
            <p>{review.star_rating}/5 ⭐</p>
        </div>
        :
        <p>Loading...</p>
    )

}

export default ShowReviews