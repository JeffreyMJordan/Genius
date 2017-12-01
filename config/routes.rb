Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :songs, only: [:create, :show, :destroy, :index]
    resources :albums, only: [:create, :show, :index]
    resources :artists, only: [:create, :show, :index]
    resources :referents, only: [:create, :show, :destroy]
    resources :annotations, only: [:create, :show, :destroy]
    resources :comments, only: [:create, :show, :destroy]
    resources :votes, only: [:create, :update, :destroy]

    get 'comment_by_annotation', to: 'comments#find_by_annotation'
    get 'votes_by_annotation', to: 'votes#find_by_annotation'
    get 'annotations_by_referent', to: 'annotations#by_referent'
    get 'payloads', to: 'payloads#send_payloads'
    get 'payloads/songs', to: 'payloads#send_payload_by_song_id'
  end

  

  root 'static_pages#root'
end
