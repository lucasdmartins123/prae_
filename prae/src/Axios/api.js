import axios from "axios";

export const api = axios.create({
  baseURL: "https://yuri-production-77e2.up.railway.app/",
});
