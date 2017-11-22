class Api::SongsController < ApplicationController

  def create 
    @song = Song.new(song_params)
    if @song.save 
      render :show
    else 
      render json: @song.errors.full_messages, status: 422
    end
  end

  #Maybe add logic for fetching artists, albums, etc. 
  #Then on frontend, add 3 actions for different payload parts 
  def index 
    @songs = Song.all 
    render :index
  end

  def show
    @song = Song.find_by_id(params[:id])
    render :show
  end 

  def destroy
    @song = Song.find_by_id(params[:id])
    if @song 
      @song.destroy
      render :show
    else 
      render json: ["That song doesn't exist"], status: 422
    end
  end 

  private 
  def song_params 
    params.require(:song).permit(:title, :artist_id, :album_id, :lyrics, :creator_id)
  end
end
