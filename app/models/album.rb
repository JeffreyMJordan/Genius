class Album < ApplicationRecord
  validates :title, presence: true
  validates :title, uniqueness: true
  attr_reader :artistName
  # attr_reader :image_url

  has_many :songs, 
    primary_key: :id,
    foreign_key: :album_id,
    class_name: 'Song'

  belongs_to :artist,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: 'Artist'

  def artistName=(artist)
    @artistName = Artist.find_by_name(artist)
    if @artistName 
      self.artist_id = @artistName.id 
    else 
      self.artist_id = nil 
    end
  end

  # def image_url=(image_url)
  #   if !image_url
  #     self.image_url = "https://images.genius.com/2437bc26e1e6308905b165e4a98be6f4.700x700x1.jpg"
  #   else
  #     self.image_url = image_url
  #   end
  # end 

end
