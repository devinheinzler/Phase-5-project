class CampaignsController < ApplicationController


    def index
        render json: Campaign.all, status: :ok
    end

    def show
        campaign = Campaign.find(params[:id])
        render json: campaign.to_json, status: :ok
    end

    def update
        campaign = Campaign.find(params[:id])
        campaign.update(campaign_params)
        render json: campaign, status: :ok
    end

    def user_campaigns
        user = User.find(params[:id])
        userCampaigns = user.campaigns
        render json: userCampaigns, status: :ok
    end

    private
    def campaign_params
        params.permit(:campaign_title, :campaign_story, :campaign_setting, :campaign_NPCs, :campaign_challenges, :campaign_aftermath)
    end

    end 
