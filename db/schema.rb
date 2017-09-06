# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170906211409) do

  create_table "events", force: :cascade do |t|
    t.string "title"
    t.datetime "started_at"
    t.datetime "ended_at"
    t.text "desc"
    t.integer "section_id"
    t.integer "place_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "themes"
    t.index ["place_id"], name: "index_events_on_place_id"
    t.index ["section_id"], name: "index_events_on_section_id"
  end

  create_table "events_speakers", id: false, force: :cascade do |t|
    t.integer "event_id"
    t.integer "speaker_id"
    t.index ["event_id"], name: "index_events_speakers_on_event_id"
    t.index ["speaker_id"], name: "index_events_speakers_on_speaker_id"
  end

  create_table "fests", force: :cascade do |t|
    t.string "title"
    t.string "slug"
    t.date "started_at"
    t.date "ended_at"
    t.text "desc"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "places", force: :cascade do |t|
    t.string "title"
    t.text "desc"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sections", force: :cascade do |t|
    t.string "title"
    t.string "slug"
    t.string "photo"
    t.text "desc"
    t.integer "fest_id"
    t.integer "place_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["fest_id"], name: "index_sections_on_fest_id"
    t.index ["place_id"], name: "index_sections_on_place_id"
  end

  create_table "speakers", force: :cascade do |t|
    t.string "title"
    t.string "photo"
    t.text "desc"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
