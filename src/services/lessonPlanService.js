import axios from "axios";

let token = null;

function setToken(newToken) {
  token = `Bearer ${newToken}`;
}

export default {
  setToken,
};
