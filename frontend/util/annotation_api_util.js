export const createAnnotation = (annotation) => {
  return $.ajax({
    method: "POST",
    url: "api/annotations",
    data: {annotation: annotation}
  });
};

export const fetchAnnotation = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/annotations/${id}`
  });
};

export const fetchAnnotationsByReferent = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/annotations_by_referent`,
    data: {id: id}
  });
};

export const deleteAnnotation = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `api/annotations/${id}`
  });
};



