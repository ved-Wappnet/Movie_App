import axios from "axios";

const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
const baseURL = import.meta.env.VITE_REACT_APP_BASE_URL;
console.log(baseURL);

const ApiClient = axios.create({
  baseURL: baseURL,
  params: {
    apiKey: apiKey,
  },
});

ApiClient.interceptors.request.use(
  (config) => {
    // console.log(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

ApiClient.interceptors.response.use(
  (response) => {
    // console.log(response);
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default ApiClient;
