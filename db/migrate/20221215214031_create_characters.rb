class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|

      t.integer   :user_id
      t.integer   :campaign_id
      t.string    :character_name
      t.string    :character_image
      t.string    :race_name
      t.string    :race_image
      t.string    :race_description
      t.string    :race_trait_name
      t.string    :subrace_name
      t.string    :class_name
      t.string    :class_image
      t.string    :subclass
      t.string    :subclass_feature
      t.string    :race_proficiencies
      t.string    :character_background
      t.string    :character_language
      t.string    :character_alignment
      t.string    :character_notes 
      t.timestamps
    end
  end
end
