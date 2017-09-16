class AddTitleShortToPlaces < ActiveRecord::Migration[5.1]
  def change
    add_column :places, :title_short, :string
  end
end
