import axios from "axios";

const baseURL = "https://school-tool.onrender.com/login";

function login(credentials) {
  return axios.post(baseURL, credentials).then((res) => res.data);
}
export default {
  login,
};
