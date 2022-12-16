class CreateCampaigns < ActiveRecord::Migration[6.1]
  def change
    create_table :campaigns do |t|

      t.string  :campaign_title
      t.string  :campaign_story
      t.string  :campaign_setting
      t.string  :campaign_NPCs
      t.string  :campaign_challenges
      t.string  :campaign_climax
      t.string  :campaign_aftermath
      t.timestamps
    end
  end
end
