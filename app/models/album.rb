class Album < ApplicationRecord
  validates :title, presence: true
  validates :title, uniqueness: true
  attr_reader :artistName

  has_many :songs, 
    primary_key: :id,
    foreign_key: :album_id,
    class_name: 'Song'

  belongs_to :artist,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: 'Artist',
    optional: true

  def artistName=(artist)
    @artistName = Artist.find_by_name(artist)
    if @artistName 
      self.artist_id = @artistName.id 
    else 
      self.artist_id = nil
    end
    
  end

end
