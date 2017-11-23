class Api::AlbumsController < ApplicationController

  def create 
    @album = Album.new(album_params)
    if @album.save 
      render :show
    else 
      render json: @album.errors.full_messages, status: 422
    end 
  end 

  def show 
    @album = Album.find_by_id(params[:id])
    render :show
  end 

  def index 
    @albums = Album.all 
    render :index
  end 

  private 
  def album_params 
    params.require(:album).permit(:artist, :title, :image_url, :description)
  end

end
