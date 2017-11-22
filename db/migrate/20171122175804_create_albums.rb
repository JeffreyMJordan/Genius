class CreateAlbums < ActiveRecord::Migration[5.1]
  def change
    create_table :albums do |t|
      t.string :title, null: false
      t.integer :artist_id
      t.string :image_url
      t.text :description
      t.timestamps
    end
    add_index :albums, :title, unique: true

  end
end
