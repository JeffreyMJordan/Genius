class Song < ApplicationRecord
  validates :title, :creator_id, :lyrics, presence: true 
  validates :title, uniqueness: true
  attr_reader :albumName
  attr_reader :artistName

  belongs_to :creator,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name: 'User'

  belongs_to :artist, 
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: 'Artist',
    optional: true

  belongs_to :album, 
    primary_key: :id,
    foreign_key: :album_id,
    class_name: 'Album',
    optional: true

  def albumName=(album)
    @albumName = Album.find_by_title(album)
    self.album_id = @albumName.id 
  end

  def artistName=(artist)
    @artistName = Artist.find_by_name(artist)
    self.artist_id = @artistName.id 
  end


end
