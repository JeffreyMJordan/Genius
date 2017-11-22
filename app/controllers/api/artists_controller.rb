class Api::ArtistsController < ApplicationController

  def create 
    @artist = Artist.new(artist_params)
    if @artist.save 
      render :show
    else
      render json: @artist.errors.full_messages, status: 422
    end
  end 

  def show 
    @artist = Artist.find_by_id(params[:id])
    render :show
  end 

  private 
  def artist_params
    params.require(:artist).permit(:name, :image_url, :description)
  end

end
