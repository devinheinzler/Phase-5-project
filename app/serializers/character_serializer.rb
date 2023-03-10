class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :campaign_id, :character_name, :character_image, :race_name, :race_trait_name, :class_name, :class_image, :subclass_feature, :race_proficiencies, :character_background, :character_alignment, :character_notes
  belongs_to :campaign
  belongs_to :user
  # has_many :user_characters
  # has_many :users, through: :user_characters
end
