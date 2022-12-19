class SessionsController < ApplicationController

    def create
        params.permit(:first_name, :last_name, :session, :email_address, :password)
        user = User.find_by(email_address: params[:email_address])
        if user&.authenticate(params[:password])

            render json: user, status: :ok
        else
            render json: {error: "Login invalid"}, status: :not_found
        end
    end
    def destroy
        session.delete :user_id
        head :no_content
    end

end
