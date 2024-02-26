import axios from "axios";

const BASE_URL = "https://s3.amazonaws.com";

const ApiClient = axios.create({
  baseURL: `${BASE_URL}/eight-public/challenge`,
  headers: {
    "Content-type": "application/json",
  },
});

export default ApiClient;
