class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :title
      t.datetime :started_at
      t.datetime :ended_at
      t.text :desc
      t.references :section, foreign_key: true
      t.references :place, foreign_key: true

      t.timestamps
    end
  end
end
