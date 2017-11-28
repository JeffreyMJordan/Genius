export const createComment = (comment) => {
  return $.ajax({
    method: "POST",
    url: "api/comments",
    data: {comment: comment}
  });
};  

export const fetchComment = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/comments/${id}`
  });
};

export const fetchCommentsByAnnotation = (id) => {
  return $.ajax({
    method: "GET", 
    url: `api/comment_by_annotation`,
    data: {id: id}
  });
};

export const deleteComment = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `api/comments/${id}`
  });
};