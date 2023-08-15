import axios from "axios";

const baseURL = "localhost: 3001/login";

function login(credentials) {
  return axios.post(baseURL, credentials).then((res) => res.data);
}
export default {
  login,
};
