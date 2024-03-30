import { AxiosError } from 'axios';
import { axiosInstance } from './core/instance';
import { setToken } from './token/core';
import {
    AddBoockingDTO, AddClientDTO, AddStayingDTO,
    ApiException, AuthInfoDto, BookingDTO,
    ClientDTO, GetRoomsParams, ResponseWrap,
    RoomDTO, StatisticDTO, StayingDTO
} from './types';

export const getAvailableRoomsQuery = async (params?: GetRoomsParams) => {
    const response = await axiosInstance.get<ResponseWrap<RoomDTO[]>>(`/rooms`, {
        params
    });
    return response.data;
};

export const getClientsQuery = async () => {
    try {
        const response = await axiosInstance.get<ResponseWrap<ClientDTO[]>>('/clients');
        return response.data;
    } catch (error) {
        const err = error as AxiosError<ApiException>;
        throw err.response?.data.message
    }
}

export const addClientQuery = async (client: AddClientDTO) => {
    try {
        const response = await axiosInstance.post('/clients', client);
        return response;
    } catch (error) {
        const err = error as AxiosError<ApiException>;
        throw err.response?.data.message
    }
}

export const addStayingQuery = async (data: AddStayingDTO) => {
    try {
        const response = await axiosInstance.post('/stayings', data);
        return response;
    } catch (error) {
        const err = error as AxiosError<ApiException>;
        throw err.response?.data.message
    }
}

export const addBoockingQuery = async (data: AddBoockingDTO) => {
    try {
        const response = await axiosInstance.post('/bookings', data);
        return response;
    } catch (error) {
        const err = error as AxiosError<ApiException>;
        throw err.response?.data.message
    }
}

export const checkOutClientQuery = async (data: number) => {
    try {
        const response = await axiosInstance.put('/stayings', {
            stayingId: data
        });
        return response;
    } catch (error) {
        const err = error as AxiosError<ApiException>;
        throw err.response?.data.message;
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

export const getStatisticQuery = async () => {
    try {
        const response = await axiosInstance.get<ResponseWrap<StatisticDTO>>('/statistic');
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
