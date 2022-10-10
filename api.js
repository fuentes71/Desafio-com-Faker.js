const API_URL = "http://localhost:3333/users?q=";

export async function api(filter) {
  const response = await fetch(`${API_URL}${filter}`);
  const json = await response.json();
  return json;
}
