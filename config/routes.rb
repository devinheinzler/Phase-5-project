Rails.application.routes.draw do
  
  resources :campaigns
  resources :characters
  resources :reviews
  resources :users 



  post '/login', to: 'sessions#create'
  get '/logout', to: 'sessions#destroy'
  post '/signup', to: 'users#create'
  get '/user/:id/user_campaigns', to:'campaigns#user_campaigns'
  get '/user/:id/user_characters', to:'characters#user_characters'
  post '/user/:id/user_campaigns', to:'campaigns#user_campaigns'
  post '/user/:id/user_characters', to:'characters#create'
  delete '/user/:user_id/user_characters/:user_character_id', to:'characters#destroy'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post '/api_call/:class', to: 'application#api_calls'
end
