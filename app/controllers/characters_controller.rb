class CharactersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response

    def create
        # if session[:user_id]
            render json: Character.create(character_params), status: :ok
        # else
        #     render json: {error: "Not authorized"}, status: :unauthorized
        # end
    end

    def index
        render json: Character.all, status: :ok
    end

    def show
        render json: Character.find(params[:id]), status: :ok
    end

    def update
        character = Character.find(params[:id])
        character.update(character_params)
        render json: character, status: :ok
    end

    def destroy
        Character.find(params[:id]).destroy
        render json: {}, status: :ok
    end

    private
    def character_params
        params.permit(:character_name, :character_image, :race_name, :race_trait_name, :class_name, :class_image, :subclass_feature, :race_proficiencies, :character_background, :character_alignment, :character_notes)
    end

    def not_found_response
        render json: {error: "Character not found"}, status: :not_found
    end

end
