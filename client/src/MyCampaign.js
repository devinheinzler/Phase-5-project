import React, {useEffect, useState} from "react";
import MyCampaignCard from "./MyCampaignCard";

function MyCampaign({currentUser}) {

    const [userCampaigns, setUserCampaigns] = useState()

    useEffect(() =>{
        fetch(`http://localhost:3000//user/${currentUser.id}/user_campaigns`)
        .then(r => r.json())
        .then(userCampaignData => setUserCampaigns(userCampaignData))
    })

    return(
        userCampaigns ?
        <div>
            <header>View Your Campaigns Below!</header>
            {userCampaigns.map(userCampaign => <MyCampaignCard key={userCampaign.id} userCampaign={userCampaign} />)}
        </div>
        :
        <p>Loading...</p>
    )
}

export default MyCampaign