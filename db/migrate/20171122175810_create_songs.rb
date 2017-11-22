class CreateSongs < ActiveRecord::Migration[5.1]
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.integer :artist_id 
      t.integer :album_id 
      t.integer :creator_id, null: false
      t.text :lyrics, null: false
      t.timestamps
    end
    add_index :songs, :title, unique: true
  end
end
