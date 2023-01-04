class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email_address
  has_many :reviews
  has_many :campaigns, through: :reviews
  has_many :characters
  has_many :campaigns, through: :characters
end
