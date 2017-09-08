class AddBookToEvents < ActiveRecord::Migration[5.1]
  def change
    add_column :events, :book, :string
  end
end
