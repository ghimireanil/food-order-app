import Axios from "axios";
export const axios = Axios.create({
  baseURL: `https://foodhub-api.herokuapp.com`,
});
