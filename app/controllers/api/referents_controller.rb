class Api::ReferentsController < ApplicationController

  def create 
    @referent = Referent.new(referent_params)
    if @referent.save 
      render :show
    else 
      render json: @referent.errors.full_messages, status: 422
    end 
  end 

  def show 
    @referent = Referent.find_by_id(params[:id])
    render :show
  end 


  private 
  def referent_params 
    params.require(:referent).permit(:start_idx, :end_idx, :creator_id, :song_id)
  end 
end
