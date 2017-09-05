class CreateEventsSpeakers < ActiveRecord::Migration[5.1]
  def change
    create_table :events_speakers, id: false  do |t|
      t.belongs_to :event, index: true
      t.belongs_to :speaker, index: true
    end
  end
end
