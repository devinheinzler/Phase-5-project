import React from "react";
import { NavLink } from "react-router-dom";

function CampaignCard({campaign, campaignReview}) {
console.log(campaign)
// console.log(selectedCampaign)

const {campaign_title, id, campaign_story} = campaign



    return (
        <div>
                <h1>{campaign_title}</h1>
            <h2>Campaign Story:</h2>
            <p>{campaign_story}</p>
            <NavLink to={`/campaign/${id}`}>
                <button>View Campaign Details ➡</button>
            </NavLink>
            <NavLink to = {`/Reviewform`}>
                <button onClick={() => campaignReview(id, campaign_title)}>Leave a Review ➡</button>   
            </NavLink>
        </div>
    )

}

export default CampaignCard