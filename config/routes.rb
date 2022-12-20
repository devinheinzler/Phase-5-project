Rails.application.routes.draw do
  
  resources :campaigns
  resources :characters
  resources :reviews
  resources :users



  post '/login', to: 'sessions#create'
  get '/logout', to: 'sessions#destroy'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post '/api_call/:class', to: 'application#api_calls'
end
