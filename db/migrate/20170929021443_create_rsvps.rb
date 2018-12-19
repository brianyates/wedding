class CreateRsvps < ActiveRecord::Migration[5.0]
  def change
    create_table :rsvps do |t|

      t.timestamps
    end
	
	add_column :rsvps, :first_name, :string
	add_column :rsvps, :last_name, :string
	add_column :rsvps, :so_first_name, :string
	add_column :rsvps, :so_last_name, :string
	add_column :rsvps, :plus_one, :boolean, default: false
	add_column :rsvps, :attending_value, :boolean
  end
end
