class CreateVotes < ActiveRecord::Migration[5.1]
  def change
    create_table :votes do |t|
      t.integer :annotation_id, null: false
      t.integer :user_id, null: false
      t.string :type, null: false
      t.timestamps
    end
    add_index :votes, :annotation_id
    add_index :votes, :user_id
  end
end
