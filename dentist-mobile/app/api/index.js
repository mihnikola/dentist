// src/api/axiosInstance.js

import { getData } from "@/helpers";
import axios from "axios";

// Define your API base URL
const API_URL = "http://10.58.158.121:5000"; // Replace with your API base URL

// Create an instance of Axios with default configurations
const axiosInstance = axios.create({

  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    // Add other default headers here if needed
  },
});

// You can add request/response interceptors here if needed
axiosInstance.interceptors.request.use(
  (config) => {
    // Get the token from storage (this could be AsyncStorage, a context, etc.)

    getData().then((res) => {

      if (res) {
        config.headers["Authorization"] = `Bearer ${res}`;
      }
      return config;
    });
    // If token exists, add it to the Authorization header
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle errors globally if needed
    return Promise.reject(error);
  }
);

export default axiosInstance;
