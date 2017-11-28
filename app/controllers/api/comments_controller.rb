class Api::CommentsController < ApplicationController
  def create 
    @comment = Comment.new(comment_params)
    if @comment.save 
      render :show
    else 
      render json: @comment.errors.full_messages, status: 422
    end 
  end 

  def find_by_annotation
    @annotation = Annotation.find_by_id(params[:id])
    @comments = @annotation.comments 
    render :index
  end 

  def show 
    @comment = Comment.find_by_id(params[:id])
    render :show
  end 

  def destroy 
    @comment = Comment.find_by_id(params[:id])
    if @comment 
      @comment.destroy 
      render :show 
    else 
      render json: ["That comment doesn't exist"], status: 422
    end 
  end 

  private 
  def comment_params
    params.require(:comment).permit(:body, :author_id, :annotation_id)
  end 
end
