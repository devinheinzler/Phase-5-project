class User < ApplicationRecord
    has_many :reviews
    has_many :campaigns, through: :reviews
    has_many :characters
    has_many :campaigns, through: :characters
end
