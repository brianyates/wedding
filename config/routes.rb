Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'welcome#index'
  post '/rsvp' => 'rsvps#create'
  get '/list-all-rsvps' => 'rsvps#index'
  get '/messages/new' => 'messages#new'
  post '/messages/new' => 'messages#create'
  get '/get-photos' => 'photos#get'
  get '/shuttle-service' => 'welcome#shuttle_service'
end
