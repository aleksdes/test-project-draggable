import { API_URL } from "~/constants/urls";

const urlRequest = (url, params = null) => {
  return API_URL + url + (params ? "/?" + new URLSearchParams(params) : "");
};

export default urlRequest;
