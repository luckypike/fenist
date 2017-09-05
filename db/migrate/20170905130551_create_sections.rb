class CreateSections < ActiveRecord::Migration[5.1]
  def change
    create_table :sections do |t|
      t.string :title
      t.string :slug
      t.string :photo
      t.text :desc
      t.references :fest, foreign_key: true
      t.references :place, foreign_key: true

      t.timestamps
    end
  end
end
