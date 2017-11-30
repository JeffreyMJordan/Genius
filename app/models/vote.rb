class Vote < ApplicationRecord
  validates :user_id, :annotation_id, :vote_type, presence: true 
  
  belongs_to :user
  belongs_to :annotation
end
