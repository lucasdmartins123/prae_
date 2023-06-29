import axios from "axios";

export const api = axios.create({
  baseURL: "https://bibliotecaprae-production.up.railway.app/",
});
