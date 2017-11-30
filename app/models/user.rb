class User < ApplicationRecord
  validates :username, :password_digest, presence: true
  validates :username, uniqueness: true 
  validates :password, length: {minimum: 6, allow_nil: true}
  attr_reader :password 
  after_initialize :ensure_session_token 

  has_many(:songs,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name: 'Song'
  )

  has_many :referents,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name: 'Referent'

  has_many :annotations,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'Annotation'

  has_many :comments,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'Comment'

  has_many :votes

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token 
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save! 
  end

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    if user 
      if BCrypt::Password.new(user.password_digest).is_password?(password)
        return user 
      else 
        return nil 
      end
    else 
      return nil 
    end
  end

end
