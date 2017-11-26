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

json.set! :referents do 
  json.array! @song.referents do |ref|
    json.id ref.id
    json.start_idx ref.start_idx
    json.end_idx ref.end_idx
    json.song_id ref.song_id
    json.creator_id ref.creator_id
  end 
end
