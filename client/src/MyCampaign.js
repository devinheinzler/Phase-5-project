import React, {useEffect, useState} from "react";

function MyCampaign({currentUser}) {

    const [userCampaigns, setUserCampaigns] = useState()

    useEffect(() =>{
        fetch(`http://localhost:3000//user/${currentUser.id}/user_campaigns`)
        .then(r => r.json())
        .then(userCampaignData => setUserCampaigns(userCampaignData))
    })

    return(
        <div>

        </div>
    )
}