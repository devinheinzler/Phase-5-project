class Campaign < ApplicationRecord
    has_many :reviews
    has_many :characters
    has_many :users, through: :reviews
    has_many :users, through: :characters
end
