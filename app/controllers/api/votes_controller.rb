class Api::VotesController < ApplicationController

  def create 
    @vote = Vote.new(vote_params)
    if @vote.save 
      render :show
    else 
      render json: ["Invalid vote"], status: 422
    end 
  end 

  def get_total(votes) 
    total = 0 
    votes.each do |vote| 
      if vote.vote_type=="up"
        total += 1
      else 
        total -= 1
      end 
    end 
    return total
  end 

  def find_by_annotation 
    @annotation = Annotation.find_by_id(params[:id])
    if @annotation 
      @votes = @annotation.votes 
      @total = get_total(@votes)
      render :index
    else 
      render json: ["No such annotation"], status: 422
    end 
  end 

  def update
    @vote = Vote.find_by_id(params[:id])
    
    if @vote.vote_type=="up"
      @vote.vote_type = "down"
    else
      @vote.vote_type = "up"
    end 

    if @vote.save 
      render :show
    else 
      render json: ["Invalid vote"], status: 422
    end 
  end 

  private 
  def vote_params
    params.require(:vote).permit(:user_id, :annotation_id, :vote_type)
  end 
end
