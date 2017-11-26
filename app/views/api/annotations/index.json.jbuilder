json.array! @annotations do |annotation| 
  json.id  annotation.id 
  json.referent_id  annotation.referent_id
  json.author_id  annotation.author_id 
  json.body  annotation.body
end 