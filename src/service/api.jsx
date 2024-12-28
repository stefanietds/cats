import axios from "axios";

const api = axios.create({
  baseURL: "https://api.thecatapi.com/v1/images",
});

export default api;