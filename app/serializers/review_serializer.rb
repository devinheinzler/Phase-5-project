class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :campaign_id, :campaign_title, :review_content, :star_rating, :user_id, :campaign_id
  belongs_to :user
  belongs_to :campaign
end
