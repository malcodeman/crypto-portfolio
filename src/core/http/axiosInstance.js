import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

let instance = axios.create({
  baseURL: API_URL
});

instance.interceptors.request.use(
  config => {
    config.headers.Authorization = localStorage.getItem("token");
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    return Promise.resolve(response);
  },
  error => {
    console.log(error.response.status);
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      return Promise.reject(error);
    }
  }
);

export default instance;
