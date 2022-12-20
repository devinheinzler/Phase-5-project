class ApplicationController < ActionController::API
  include ActionController::Cookies

    def api_calls
      response = JSON.parse(RestClient.get("https://www.dnd5eapi.co/api/classes/#{params[:class]}"))
      debugger

    end
end
