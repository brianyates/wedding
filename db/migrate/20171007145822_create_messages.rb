class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|

      t.timestamps
    end
	add_column :messages, :name, :string
	add_column :messages, :message, :string
  end
end
