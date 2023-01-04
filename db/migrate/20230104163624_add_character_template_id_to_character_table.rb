class AddCharacterTemplateIdToCharacterTable < ActiveRecord::Migration[6.1]
  def change
    add_column :characters, :character_template_id, :integer
  end
end
