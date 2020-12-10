import axios from "axios";
// import { API_URL } from "../constants/Config";

export const apiClient = axios.create({
  baseURL: 'http://13.232.216.80/emis_login/api/',
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
    "Authorization": "EMIS@2019_api",
    common: {
      //set token for authorization
      // Authorization: localStorage.getItem("token")
    }
  }
});

export function get(url, callback) {
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
      Pragma: "no-cache"
    }
  })
    .then(response => {
      if (!response.ok) {
        throw Error(response.status);
      }
      return response.json();
    })
    .then(result => callback(null, result))
    .catch(err => callback(err));
}
