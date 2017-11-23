class Api::PayloadsController < ApplicationController

  def send_payload 
    @limit = params[:limit]
    @songs = Song.limit(@limit)
    @albums = @songs.map{|song| song.album}
    @artists = @songs.map{|song| song.artist}
    render :payload

  end 
end
