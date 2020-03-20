import axios from "axios";

export const axios_ori = axios;

export const Loginlink = axios.create({
  baseURL:
    "http://ec2-13-229-126-213.ap-southeast-1.compute.amazonaws.com:8000/"
});

export const Movielink = axios.create({
  baseURL:
    "http://ec2-13-229-126-213.ap-southeast-1.compute.amazonaws.com:8000/api/movies/"
});
export const GneresLink = axios.create({
  baseURL:
    "http://ec2-13-229-126-213.ap-southeast-1.compute.amazonaws.com:8000/api/genresall/"
});
export const LoginLink = "";
