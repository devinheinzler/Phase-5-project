class User < ApplicationRecord
    has_many :reviews
    has_many :campaigns, through: :reviews
    # has_many :user_characters
    has_many :characters
    has_many :campaigns, through: :characters
    has_secure_password
end
