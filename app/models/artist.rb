class Artist < ApplicationRecord
  validates :name, presence: true
  validates :name, uniqueness: true

  has_many :albums,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: 'Album'

  has_many :songs,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: 'Song'

  
end
