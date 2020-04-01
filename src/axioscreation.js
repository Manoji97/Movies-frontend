import axios from "axios";

export const axios_ori = axios;

export const LoginLink = axios.create({
  baseURL:
    "http://localhost/"
});

export const Movielink = axios.create({
  baseURL:
    "http://localhost/api/movies/"
});
export const GneresLink = axios.create({
  baseURL:
    "http://localhost/api/genresall/"
});

export const BaseLink = axios.create({
  baseURL:
    "http://localhost/api/"
});

BaseLink.defaults.headers["Content-Type"] = "application/json";
