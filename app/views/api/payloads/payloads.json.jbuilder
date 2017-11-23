json.array! @songs do |currentSong| 
  json.set! :song do 
    json.partial! "api/songs/song", song: currentSong
  end 
  album = currentSong.album 
  json.set! :album do 
    json.partial! "api/albums/album", album: album
  end 

  artist = currentSong.artist
  json.set! :artist do 
    json.partial! "api/artists/artist", artist: artist
  end 
end