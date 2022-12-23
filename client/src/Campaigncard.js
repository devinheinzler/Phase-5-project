import React from "react";
import { NavLink } from "react-router-dom";

function CampaignCard({campaign}) {
console.log(campaign)




    return (
        <div>
                <h1>{campaign.campaign_title}</h1>
            <h2>Campaign Story:</h2>
            <p>{campaign.campaign_story}</p>
            <NavLink to={`/campaign/${campaign.id}`}>
                <button>View Campaign Details ➡</button>
            </NavLink>
        </div>
    )

}

export default CampaignCard