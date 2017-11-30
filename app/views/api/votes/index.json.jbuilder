json.set! :votes do 
  json.array! @votes do |vote| 
    json.id vote.id 
    json.annotation_id vote.annotation_id
    json.user_id vote.user_id 
  end 
end 
json.total = @total