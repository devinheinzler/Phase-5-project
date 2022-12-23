import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Reviewform({selectedCampaign}) {
  const [reviewFormData, setReviewFormData] = useState({star_rating: "", review_content: ""})
  const navigate = useNavigate()
console.log(selectedCampaign)
  function handleSubmit(event) {
    event.preventDefault();

    const newReview = {
        user_id: selectedCampaign.user,
        campaign_title: selectedCampaign.campaign_title,
        campaign_id: selectedCampaign.campaign_id,
        star_rating: reviewFormData.star_rating,
        review_content: reviewFormData.review_content
    }
console.log(newReview)
    // Send the form data to a server or perform other actions here
    fetch("http://localhost:3000/reviews", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(newReview)
    })
    .then(res => res.json())
    .then(navigate('/campaigns'))
  }

  return (
    <form onSubmit={handleSubmit}>
        <h1>{selectedCampaign.campaign_title}</h1>
      <br />
      <label>
        Star Rating out of 5:
        <input type="number" name='star_rating' id='star_rating' value={reviewFormData['star_rating']} onChange={event => setReviewFormData({...reviewFormData, star_rating: event.target.value})} />
      </label>
      <br />
      {/* <label> */}
        {/* First Name:
        <input type="text" name='first_name' id='first_name' value={reviewFormData['first_name']} onChange={event => setReviewFormData({...reviewFormData, first_name: event.target.value})} />
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" name='last_name' id='last_name' value={reviewFormData['last_name']} onChange={event => setReviewFormData({...reviewFormData, last_name: event.target.value})} />
      </label> */}
      <br />
      <label>
        Review:
        <textarea name='review_content' id='review_content' value={reviewFormData['review_content']} onChange={event => setReviewFormData({...reviewFormData, review_content: event.target.value})} />
      </label>
      <br />
      <button type='submit'>
        Submit Review!
      </button>
    </form>
);
}

export default Reviewform;