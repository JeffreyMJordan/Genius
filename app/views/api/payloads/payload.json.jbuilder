json.set! :song do 
  json.partial! "api/songs/song", song: @song
end 
album = @song.album 
json.set! :album do 
  json.partial! "api/albums/album", album: album
end 

artist = @song.artist
json.set! :artist do 
  json.partial! "api/artists/artist", artist: artist
end 