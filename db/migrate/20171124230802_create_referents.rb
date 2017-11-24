class CreateReferents < ActiveRecord::Migration[5.1]
  def change
    create_table :referents do |t|
      t.integer :start_idx, null: false
      t.integer :end_idx, null: false
      t.integer :creator_id, null: false
      t.integer :song_id, null: false
      t.timestamps
    end
    add_index :referents, :song_id
  end
end
