class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :campaign_id :character_name, :character_image, :race_name, :race_image, :race_description, :race_trait_name, :subrace_name, :class_name, :class_image, :subclass, :subclass_feature, :race_proficiencies, :character_background, :character_language, :character_alignment, :character_notes
end
