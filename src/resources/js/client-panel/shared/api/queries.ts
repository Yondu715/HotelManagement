import { AxiosError } from 'axios';
import { axiosInstance } from './core/instance';
import { setToken } from './token/core';
import {
    ApiException, AuthInfoDto,
    BookingDTO, GetRoomsParams, ResponseWrap,
    RoomDTO, StayingDTO
} from './types';

export const getAvailableRoomsQuery = async (params?: GetRoomsParams) => {
    const response = await axiosInstance.get<ResponseWrap<RoomDTO[]>>(`/rooms`, {
        params
    });
    return response.data;
};

export const addBoockingQuery = async (data: unknown) => {
    try {
        const response = await axiosInstance.post('/bookings', data);
        return response;
    } catch (error) {
        const err = error as AxiosError<ApiException>;
        throw err.response?.data.message
    }
}

export const getBookingsQuery = async () => {
    try {
        const response = await axiosInstance.get<ResponseWrap<BookingDTO[]>>('/bookings');
        return response.data;
    } catch (error) {
        const err = error as AxiosError<ApiException>;
        throw err.response?.data.message;
    }
}

export const getStayingsQuery = async () => {
    try {
        const response = await axiosInstance.get<ResponseWrap<StayingDTO[]>>('/stayings');
        return response.data;
    } catch (error) {
        const err = error as AxiosError<ApiException>;
        throw err.response?.data.message;
    }
};

export const loginQuery = async (email: string, password: string) => {
    await axiosInstance.get('/sanctum/xsrf-cookie', {
        baseURL: 'http://localhost:80/sanctum/csrf-cookie'
    });
    try {
        const response = await axiosInstance.post<AuthInfoDto>('/auth/login', {
            email,
            password
        });
        setToken(response.data.token);
        return response.data;
    } catch (error) {
        const err = error as AxiosError<ApiException>;
        throw err.response?.data.message
    }
}

export const deleteBookingQuery = async (bookingId: number) => {
    try {
        const response = await axiosInstance.delete(`/bookings/${bookingId}`);
        return response;
    } catch (error) {
        const err = error as AxiosError<ApiException>;
        throw err.response?.data.message
    }
}
