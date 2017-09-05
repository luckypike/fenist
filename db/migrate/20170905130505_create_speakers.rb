class CreateSpeakers < ActiveRecord::Migration[5.1]
  def change
    create_table :speakers do |t|
      t.string :title
      t.string :photo
      t.text :desc

      t.timestamps
    end
  end
end
