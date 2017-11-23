export const fetchPayloads = (limit) => {
  return $.ajax({
    url: "api/payloads",
    data: {limit: limit},
    method: "GET"
  });
};

export const fetchPayloadBySongID = (id) => {
  return $.ajax({
    url: "api/payloads/songs",
    data: {id: id},
    method: "GET"
  });
};