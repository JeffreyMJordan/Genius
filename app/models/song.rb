class Song < ApplicationRecord
  validates :title, :creator_id, :lyrics, presence: true 
  validates :title, uniqueness: true
  attr_reader :album 
  attr_reader :artist

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

  def album=(album)
    @album = Album.find_by_title(album)
    self.album_id = @album.id 
  end

  def artist=(artist)
    @artist = Artist.find_by_name(artist)
    self.artist_id = @artist.id 
  end


end
