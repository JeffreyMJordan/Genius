class Album < ApplicationRecord
  validates :title, presence: true
  validates :title, uniqueness: true

  has_many :songs, 
    primary_key: :id,
    foreign_key: :album_id,
    class_name: 'Song'

  belongs_to :artist,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: 'Artist'

end
