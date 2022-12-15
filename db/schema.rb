# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_12_15_214039) do

  create_table "campaigns", force: :cascade do |t|
    t.integer "campaign_id"
    t.string "campaign_title"
    t.string "campaign_story"
    t.string "campaign_setting"
    t.string "campaign_NPCs"
    t.string "campaign_challenges"
    t.string "campaign_climax"
    t.string "campaign_aftermath"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "characters", force: :cascade do |t|
    t.integer "user_id"
    t.integer "campaign_id"
    t.string "character_name"
    t.string "character_image"
    t.string "race_name"
    t.string "race_image"
    t.string "race_description"
    t.string "race_trait_name"
    t.string "subrace_name"
    t.string "class_name"
    t.string "class_image"
    t.string "subclass"
    t.string "subclass_feature"
    t.string "race_proficiencies"
    t.string "character_background"
    t.string "character_language"
    t.string "character_alignment"
    t.string "character_notes"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "review_id"
    t.integer "user_id"
    t.integer "campaign_id"
    t.string "campaign_title"
    t.string "review_content"
    t.integer "star_rating"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.integer "user_id"
    t.string "first_name"
    t.string "last_name"
    t.string "email_address"
    t.string "password"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
