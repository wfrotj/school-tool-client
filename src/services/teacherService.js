import axios from "axios";

const baseUrl = "http://localhost:3001/teacher";

async function register(credentials) {
  const response = await axios.post(baseUrl, credentials);
  return response.data;
}

let token = null;

function setToken(newToken) {
  token = `Bearer ${newToken}`;
}

export default { register, setToken };
