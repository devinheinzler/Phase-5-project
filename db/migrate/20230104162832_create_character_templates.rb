class CreateCharacterTemplates < ActiveRecord::Migration[6.1]
  def change
    create_table :character_templates do |t|
      t.string    :character_name
      t.string    :character_image
      t.string    :race_name
      t.string    :race_trait_name
      t.string    :class_name
      t.string    :class_image
      t.string    :subclass_feature
      t.string    :race_proficiencies
      t.string    :character_background
      t.string    :character_alignment
      t.timestamps
    end
  end
end
