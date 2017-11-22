class Song < ApplicationRecord
  validates :title, :creator_id, :lyrics, presence: true 
  validates :title, uniqueness: true


  belongs_to :creator,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name: 'User'

  belongs_to :artist, 
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: 'Artist'

  belongs_to :album, 
    primary_key: :id,
    foreign_key: :album_id,
    class_name: 'Album'


end
