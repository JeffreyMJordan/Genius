class CreateArtists < ActiveRecord::Migration[5.1]
  def change
    create_table :artists do |t|
      t.string :name, null: false
      t.string :image_url
      t.text :description
      t.timestamps
    end
    add_index :artists, :name, unique: true
  end
end
