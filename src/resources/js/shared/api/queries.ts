import { AxiosError } from 'axios';
import { axiosInstance } from './core/instance';
import { setToken } from './token/core';
import { AddClientDTO, AddStayingDTO, ApiException, BookingDTO, ClientDTO, GetRoomsParams, ResponseWrap, RoomDTO, StayingDTO, TokenDto } from './types';

export const getStayingRoomsQuery = async (getParams?: GetRoomsParams) => {
    const response = await axiosInstance.get<ResponseWrap<RoomDTO[]>>(`/rooms/types/staying`, {
        params: {
            ...getParams
        }
    });
    return response.data;
};

export const getClientsQuery = async () => {
    const response = await axiosInstance.get<ResponseWrap<ClientDTO[]>>('/clients');
    return response.data;
}

export const addClientQuery = async (client: AddClientDTO) => {
    try {
        await axiosInstance.post('/clients', client);
    } catch (error) {
        const err = error as AxiosError<ApiException>;
        throw err.response?.data.message
    }
}

export const addStayingQuery = async (data: AddStayingDTO) => {
    await axiosInstance.post('/stayings', data);
}

export const checkOutClientQuery = async (data: number) => {
    await axiosInstance.put('/stayings', {
        stayingId: data
    });
}

export const getBookingsQuery = async () => {
    const response = await axiosInstance.get<BookingDTO[]>('/bookings');
    return response.data;
}

export const getStayingsQuery = async () => {
    const response = await axiosInstance.get<StayingDTO[]>('/stayings');
    return response.data;
};

export const loginQuery = async (email: string, password: string) => {
    await axiosInstance.get('/sanctum/xsrf-cookie', {
        baseURL: 'http://localhost:80/sanctum/csrf-cookie'
    });
    try {
        const response = await axiosInstance.post<TokenDto>('/auth/login', {
            email,
            password
        });
        setToken(response.data.token);
        return response.data.token;
    } catch (error) {
        const err = error as AxiosError<ApiException>;
        throw err.response?.data.message
    }
}
