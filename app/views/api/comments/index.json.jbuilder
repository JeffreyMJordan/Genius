json.array! @comments do |comment| 
  json.id comment.id 
  json.author_id comment.author_id
  json.body comment.body 
  json.annotation_id comment.annotation_id
end 