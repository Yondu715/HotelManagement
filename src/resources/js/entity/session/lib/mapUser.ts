import { UserDto } from '@/shared/api/types';
import { User } from '../model/types';

export const mapUser = (userDto: UserDto): User => {
    return {
        email: userDto.email,
        name: userDto.name
    }
};