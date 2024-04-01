import axios from "axios";

// Replace with your API's base URL
export const baseURL = "https://d08c-43-224-238-194.ngrok-free.app/";

const apiClient = axios.create({
  baseURL,
});

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.error(
        "Response error apiClient:",
        error.response.status,
        error.response.data
      );
    } else if (error.request) {
      console.log("Request error apiClient:", error.message);
    } else {
      console.error("Network Error ----Something went wrong:", error.message);
    }
    return Promise.reject(error);
  }
);

export default apiClient;
