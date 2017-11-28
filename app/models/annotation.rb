class Annotation < ApplicationRecord
  validates :body, :referent_id, :author_id, presence: true 

  belongs_to :referent 

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User'

  has_many :comments
end
