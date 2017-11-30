export const createVote = (vote) => {
  return $.ajax({
    method: "POST",
    url: "api/votes",
    data: {vote: vote}
  });
};

export const fetchVotesByAnnotation = (id) => {
  return $.ajax({
    method: "GET",
    url: "api/votes_by_annotation",
    data: {id: id}
  });
};

export const updateVote = (id) => {
  return $.ajax({
    method: "PATCH",
    url: `api/votes/${id}`
  });
};