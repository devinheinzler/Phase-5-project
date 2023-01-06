class CharactersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response

    def create
        template = CharacterTemplate.find(params[:character_template_id])
        new_character = Character.create!(
            user_id: params[:user_id], 
            campaign_id: params[:campaign_id], 
            character_name: template.character_name, 
            character_image: template.character_image, 
            race_name: template.race_name, 
            race_trait_name: template.race_trait_name, 
            class_name: template.class_name, 
            class_image: template.class_image, 
            subclass_feature: template.subclass_feature, 
            race_proficiencies: template.race_proficiencies, 
            character_background: template.character_background, 
            character_alignment: template.character_alignment,
            character_template_id: template.id, 
            character_notes: '')
            render json: new_character, status: :ok
    end

    def find_templates
        CharacterTemplate.find(params[])
    end

    def index
        render json: CharacterTemplate.all, status: :ok
    end

    def show
        render json: CharacterTemplate.find(params[:id]), status: :ok
    end

    def update
        character = Character.find(params[:id])
        character.update(character_params)
        render json: character, status: :ok
    end

    def destroy
        Character.find(params[:user_character_id]).destroy
        userCharacters = Character.where('user_id = ?', params[:user_id])
        render json: userCharacters, status: :ok
    end

    def user_characters
        # debugger
        user = User.find(params[:id])
        userCharacters = user.characters
        render json: userCharacters, status: :ok
    end

    private
    def character_params
        params.permit(:character_name, :character_image, :race_name, :race_trait_name, :class_name, :class_image, :subclass_feature, :race_proficiencies, :character_background, :character_alignment, :character_notes)
    end

    def not_found_response
        render json: {error: "Character not found"}, status: :not_found
    end

end
