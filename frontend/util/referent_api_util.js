export const createReferent = (referent) => {
  return $.ajax({
    method: "POST",
    url: "api/referents",
    data: {referent: referent}
  });
};

export const fetchReferent = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/referents/${id}`
  });
};