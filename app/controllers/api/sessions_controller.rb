class Api::SessionsController < ApplicationController

  def create 
    @user = User.find_by_credentials(user_params[:username], user_params[:password])
    if @user 
      login!(@user)
      @votes = @user.votes 
      render "api/users/show"
    else 
      render json: ["Invalid credentials"], status: 401
    end 
  end

  def destroy 
    if logged_in? 
      logout! 
      render json: ["Succesfully logged out"]
    else 
      render json: ["Must be logged in to logout"], status: 404
    end
  end


  private 
  def user_params 
    params.require(:user).permit(:username, :password)
  end
end
