import React from "react";
import CampaignCard from "./Campaigncard";


function CampaignList({campaigns, campaignReview}) {

    return (
        campaigns ?
        <>
            
            <header>Select a Pre-Generated Campaign Below!</header>
            {campaigns.map(campaign => <CampaignCard key={campaign.id} campaignReview={campaignReview} campaign={campaign} />)}
        </>
:
    <p>Loading...</p>)
    }
    
    export default CampaignList;