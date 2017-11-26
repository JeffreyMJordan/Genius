Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :songs, only: [:create, :show, :destroy, :index]
    resources :albums, only: [:create, :show, :index]
    resources :artists, only: [:create, :show, :index]
    resources :referents, only: [:create, :show]
    resources :annotations, only: [:create, :show]
    get 'annotations_by_referent', to: 'annotations#by_referent'
    get 'payloads', to: 'payloads#send_payloads'
    get 'payloads/songs', to: 'payloads#send_payload_by_song_id'
  end

  

  root 'static_pages#root'
end
