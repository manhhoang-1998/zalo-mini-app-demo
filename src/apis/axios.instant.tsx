import Axios from "axios";
import { toast } from "react-toastify";

// Function to create an Axios instance with a specified base URL
export const createAxiosInstance = (baseURL: string) => {
  const axiosInstance = Axios.create({
    baseURL: baseURL,
    headers: {
      "Content-Type": "application/json",
    },
    timeout: 60 * 1000,
  });

  axiosInstance.interceptors.response.use(
    // Return data to the client
    (response) => {
      return response.data;
    },

    (error) => {
      console.log(error);
      toast.error(error?.message);
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

// Create instant for each api url
export const bitrixInstance = createAxiosInstance(
  process.env.REACT_APP_BITRIX_URL as string
);
