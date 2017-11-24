class Referent < ApplicationRecord
  validates :song_id, :creator_id, :start_idx, :end_idx, presence: true 

  belongs_to :song

  belongs_to :creator,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name: 'User'

end
