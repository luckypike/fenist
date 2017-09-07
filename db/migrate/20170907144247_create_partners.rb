class CreatePartners < ActiveRecord::Migration[5.1]
  def change
    create_table :partners do |t|
      t.string :title
      t.string :logo
      t.string :url

      t.timestamps
    end

    create_table :fests_partners, id: false  do |t|
      t.belongs_to :fest, index: true
      t.belongs_to :partner, index: true
    end

    add_reference :events, :partner
  end
end
