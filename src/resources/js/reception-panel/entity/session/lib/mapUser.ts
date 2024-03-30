import { UserDto } from '@/shared/api/types';
import { Receptionist } from '../model/types';

export const mapUser = (userDto: UserDto): Receptionist => {
    return {
        email: userDto.email,
        name: userDto.name
    }
};