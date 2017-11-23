export const fetchPayloads = (limit) => {
  return $.ajax({
    url: "api/payloads",
    data: {limit: limit},
    method: "GET"
  });
};