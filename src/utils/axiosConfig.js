import axios from "axios";

const axiosInstance = () => {
  const defaultOptions = {
    baseURL: process.env.REACT_APP_SERVER_URL + "/",
  };

  const instance = axios.create(defaultOptions);

  return instance;
};

export default axiosInstance();
