class Song < ApplicationRecord
  validates :title, :creator_id, :lyrics, presence: true 
  validates :title, uniqueness: true
  attr_reader :albumName
  attr_reader :artistName
  attr_accessor :albumImageURL

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

  def albumName=(album)
    @albumName = Album.find_by_title(album) 
    if @albumName
      self.album_id = @albumName.id 
    else 
      new_album = Album.new({title: album, artist_id: self.artist_id, image_url: @albumImageURL})
      new_album.save 
      self.album_id = Album.last.id
    end 
  end

  def artistName=(artist)
    @artistName = Artist.find_by_name(artist)
    if @artistName
      self.artist_id = @artistName.id 
    else 
      new_artist = Artist.new({name: artist})
      new_artist.save
      self.artist_id = Artist.last.id
    end 
  end


end
