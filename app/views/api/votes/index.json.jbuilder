json.set! :votes do 
  json.array! @votes do |vote| 
    json.id vote.id 
    json.annotation_id vote.annotation_id
    json.user_id vote.user_id 
    json.vote_type vote.vote_type
  end 
end 
json.total @total