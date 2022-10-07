const API_URL = "http://localhost:3333/users?q=";

function api(filter, body) {
  return {
    url: API_URL + filter,
  };
}

export default api;
