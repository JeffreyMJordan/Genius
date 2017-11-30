class RemoveTypeFromVotes < ActiveRecord::Migration[5.1]
  def change
    remove_column :votes, :type
  end
end
