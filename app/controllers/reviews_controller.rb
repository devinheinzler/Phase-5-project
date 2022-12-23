class ReviewsController < ApplicationController

    def index
        render json: Review.all, status: :ok
    end

        def create
            render json: Review.create(review_params), status: :ok
        end

    def show
        review = Review.find(params[:id])
        render json: review.to_json, status: :ok
    end

    def update
        review = Review.find(params[:id])
        review.update(review_params)
        render json: review, status: :ok
    end

    private
    def review_params
        params.permit(:user_id, :campaign_id, :campaign_title, :review_content, :star_rating)
    end

end
