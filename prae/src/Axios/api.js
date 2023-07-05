import axios from "axios";

export const api = axios.create({
  baseURL: "https://bibliotecaprae-production-94f5.up.railway.app/",
});
