class Api::PayloadsController < ApplicationController

  def send_payloads
    @limit = params[:limit]
    @songs = Song.limit(@limit)
    @albums = @songs.map{|song| song.album}
    @artists = @songs.map{|song| song.artist}
    render :payloads
  end 
  
  def send_payload_by_song_id 
    @song = Song.find_by_id(params[:id])
    if @song 
      render :payload
    else
      render json: ["Song could not be found"], status: 404
    end 
  end 
end
