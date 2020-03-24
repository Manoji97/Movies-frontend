import axios from "axios";

export const axios_ori = axios;

export const LoginLink = axios.create({
  baseURL:
    "http://ec2-52-221-169-203.ap-southeast-1.compute.amazonaws.com:8000/"
});

export const Movielink = axios.create({
  baseURL:
    "http://ec2-52-221-169-203.ap-southeast-1.compute.amazonaws.com:8000/api/movies/"
});
export const GneresLink = axios.create({
  baseURL:
    "http://ec2-52-221-169-203.ap-southeast-1.compute.amazonaws.com:8000/api/genresall/"
});

export const BaseLink = axios.create({
  baseURL:
    "http://ec2-52-221-169-203.ap-southeast-1.compute.amazonaws.com:8000/api/"
});

BaseLink.defaults.headers["Content-Type"] = "application/json";
