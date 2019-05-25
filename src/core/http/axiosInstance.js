import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const instance = axios.create({
  baseURL: API_URL
});

instance.interceptors.response.use(
  response => {
    return Promise.resolve(response);
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;
