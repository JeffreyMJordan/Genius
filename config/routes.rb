Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :songs, only: [:create, :show, :destroy, :index]
    resources :albums, only: [:create, :show]
    resources :artists, only: [:create, :show]
  end

  root 'static_pages#root'
end
