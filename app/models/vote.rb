class Vote < ApplicationRecord
  validates :user_id, :annotation_id, presence: true 
  
  belongs_to :user
  belongs_to :annotation
end
