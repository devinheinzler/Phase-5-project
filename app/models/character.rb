class Character < ApplicationRecord
    belongs_to :campaign
    belongs_to :user
    # has_many :user_characters
    # has_many :users, through: :user_characters
end
