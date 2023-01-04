import React from "react";
import { NavLink } from "react-router-dom";

function MyCampaignCard({userCampaign}) {


    // const {campaign_title, id, campaign_story} = campaign

    return (
        <div>
                <h1>{userCampaign.campaign_title}</h1>
            <h2>Campaign Story:</h2>
            <p>{userCampaign.campaign_story}</p>
            {/* <NavLink to={`/campaign/${id}`}>
                <button>View Campaign Details ➡</button>
            </NavLink> */}
        </div>
    )
}

export default MyCampaignCard