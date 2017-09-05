class CreateFests < ActiveRecord::Migration[5.1]
  def change
    create_table :fests do |t|
      t.string :title
      t.string :slug
      t.date :started_at
      t.date :ended_at
      t.text :desc

      t.timestamps
    end
  end
end
