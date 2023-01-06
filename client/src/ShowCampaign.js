import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const campaignUrl = "http://localhost:3000/campaigns"

function ShowCampaign() {
    const {id} = useParams()
    const [campaign, setCampaign] = useState(null)

    useEffect(() => {
        fetch(`${campaignUrl}/${id}`)
        .then(res => res.json())
        .then(campaignDetails => setCampaign(campaignDetails))
    }, [])

    return(
        campaign ?
        <div className='campaign-parent'>
                <div className='story'>
                    <h1>Your Journey Awaits!</h1>
                    <h2>Story:</h2>
                    <p>{campaign.campaign_story}</p>
                </div>
                <div className='setting'>
                    <h2>Setting:</h2>
                    <p>{campaign.campaign_setting}</p>
                </div>
                <div className='npcs'>
                    <h2>NPC's:</h2>
                    <p>{campaign.campaign_NPCs}</p>    
                </div>
                <div className='challenges'>
                    <h2>Challenges:</h2>
                    <p>{campaign.campaign_challenges}</p>
                </div>
                <div className='climax'>
                    <h2>Climax:</h2>
                    <p>{campaign.campaign_climax}</p>
                </div>
                <div className='aftermath'>
                <h2>Aftermath:</h2>
                    <p>{campaign.campaign_aftermath}</p>
                    <button>Add to My Campaigns</button>
                </div>
        </div>
        :
        <p>Loading...</p>
    )

}

export default ShowCampaign