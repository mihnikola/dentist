// src/api/apiCalls.js
 
import axiosInstance from "./index";

// Function to get data from the API
export const fetchData = async () => {
  try {

    const response = await axiosInstance.get('/home');
    return response.data;
  } catch (error) {
    throw error;
  }
};
