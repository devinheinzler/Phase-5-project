class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response


    def create
        # render json: User.create(user_params), status: :ok
    end
    def update
        user = User.find(params[:id])
        user.update(user_params)
        render json: user, status: :ok
    end
    def show
        render json: User.find(params[:id]), status: :ok
    end
    def destroy
        User.find(params[:id]).destroy
        render json: {}, status: :ok
    end

    private
    def user_params
        params.permit(:first_name, :last_name, :email_address, :password)
    end
    def not_found_response
        render json: {error: "User not found"}, status: :not_found
    end

end
