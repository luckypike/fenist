class AddThemesToEvents < ActiveRecord::Migration[5.1]
  def change
    add_column :events, :themes, :string, array: true
  end
end
