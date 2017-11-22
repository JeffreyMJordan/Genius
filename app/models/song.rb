class Song < ApplicationRecord
  validates :title, :creator_id, :lyrics, presence: true 
  validates :title, uniqueness: true


  belongs_to :creator,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name: 'User'


end
