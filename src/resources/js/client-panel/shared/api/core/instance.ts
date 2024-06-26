import axios from 'axios';

const BASE_URL = "http://127.0.0.1:80/api";

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
});
