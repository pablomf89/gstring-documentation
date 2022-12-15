import axios from "axios";
import config from "../config";

/*path for the nav API end point*/
export const mockAPIinstance = axios.create({
  baseURL: config.mockAPIUrl,
});

export const APIinstance = axios.create({
  baseURL: config.apiUrl,
});

APIinstance.interceptors.request.use((request) => {
  return request;
});

APIinstance.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    switch (error && error.response && error.response.status) {
      // case 401:
      //   logOut();
      //   break;
      default:
        return Promise.reject(error);
    }
  }
);
