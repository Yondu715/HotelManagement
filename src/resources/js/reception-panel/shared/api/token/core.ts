import { axiosInstance } from '../core/instance';

export const setToken = (token: string) => {
    localStorage.setItem('token', token);
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export const restoreToken = () => {
    const token = localStorage.getItem('token');
    if (!token) {
        return;
    }
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}