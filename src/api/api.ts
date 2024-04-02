import axios from "axios";

export const api = axios.create({
  baseURL: "https://shoes.pockethost.io/api/collections",
});
