class Api::AnnotationsController < ApplicationController
  def create 
    @annotation = Annotation.new(annotation_params)
    if @annotation.save 
      render :show
    else 
      render json: @annotation.errors.full_messages, status: 422
    end 
  end 

  def show 
    debugger
    @annotation = Annotation.find_by_id(params[:id])
    render :show
  end 

  def by_referent
    @referent = Referent.find_by_id(params[:id])
    @annotations = @referent.annotations
    render :index
  end 

  private 
  def annotation_params
    params.require(:annotation).permit(:author_id, :referent_id, :body)
  end 

end
