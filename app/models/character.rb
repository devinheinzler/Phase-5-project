class Character < ApplicationRecord
    belongs_to :campaign, optional: true
    belongs_to :user
    belongs_to :character_template
    # has_many :user_characters
    # has_many :users, through: :user_characters
end
