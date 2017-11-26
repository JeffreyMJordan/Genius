class CreateAnnotations < ActiveRecord::Migration[5.1]
  def change
    drop_table :annotations
    create_table :annotations do |t|
      t.integer :referent_id, null: false
      t.integer :author_id, null: false
      t.text :body, null: false
      t.timestamps
    end
    add_index :annotations, :referent_id
    add_index :annotations, :author_id
  end
end
