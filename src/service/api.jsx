import axios from "axios";

const apiKey = process.env.REACT_API_KEY_NEWS;

const catApi = axios.create({
  baseURL: "https://api.thecatapi.com/v1/images",
});

const newsApi = axios.create({
  baseURL: "https://newsapi.org/v2",
  headers: {
    Authorization: `apiKey ${apiKey}`,
  }
});

const hpApi = axios.create({
  baseURL: "https://potterapi-fedeperin.vercel.app/pt/"
});


export { catApi, newsApi, hpApi };