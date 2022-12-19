class CampaignSerializer < ActiveModel::Serializer
  attributes :id, :campaign_title, :campaign_story, :campaign_setting, :campaign_NPCs, :campaign_challenges, :campaign_aftermath
end
