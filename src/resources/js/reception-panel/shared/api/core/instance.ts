import axios from 'axios';

const BASE_URL = "http://127.0.0.1:80/api/receptionist";

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
});
