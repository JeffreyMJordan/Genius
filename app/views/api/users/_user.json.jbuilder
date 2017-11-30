json.extract! user, :id, :username
json.votes do 
  user.votes.each{|vote| json.set! vote.annotation_id, vote.vote_type}
end 