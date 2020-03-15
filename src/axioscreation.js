import axios from "axios";

export const Movielink = axios.create({
  baseURL: "http://localhost:8000/api/movies"
});
export const GneresLink = axios.create({
  baseURL: "http://localhost:8000/api/genresall/"
});
export const LoginLink = "";
