<?php

namespace App\Services;

use App\DTO\GetRoomsDto;
use App\Models\Room;
use Illuminate\Database\Eloquent\Builder;

class RoomService
{
    public function getAvailableRooms(GetRoomsDto $getRoomsDto)
    {
        $roomsWithoutBookingsAndStayings = Room::query()->whereDoesntHave('bookings')->whereDoesntHave('stayings');

        $bookingsRoomsWithoutStayings = Room::query()->whereHas('bookings', function ($query) use ($getRoomsDto) {
            $query->where(function (Builder $query) use ($getRoomsDto) {
                $query->where('check_out', '<=', now())
                    ->where(function (Builder $query) use ($getRoomsDto) {
                        $query->whereNotBetween('check_in', [$getRoomsDto->checkIn, $getRoomsDto->checkOut])
                            ->orWhereNotBetween('check_out', [$getRoomsDto->checkIn, $getRoomsDto->checkOut]);
                    });
            });
        })->whereDoesntHave('stayings');

        $roomsWithStayingsWithoutBookings = Room::query()->whereHas('stayings', function (Builder $query) {
            $query->where('check_out', null);
        })->whereDoesntHave('bookings');

        $roomsWithBookingsAndStayings = Room::query()->whereHas('bookings', function ($query) use ($getRoomsDto) {
            $query->where(function (Builder $query) use ($getRoomsDto) {
                $query->where('check_out', '<=', now())
                    ->where(function (Builder $query) use ($getRoomsDto) {
                        $query->whereNotBetween('check_in', [$getRoomsDto->checkIn, $getRoomsDto->checkOut])
                            ->orWhereNotBetween('check_out', [$getRoomsDto->checkIn, $getRoomsDto->checkOut]);
                    });
            });
        })->whereHas('stayings', function (Builder $query) {
            $query->where('check_out', null);
        });

        $filteredRooms = $roomsWithBookingsAndStayings->union($roomsWithoutBookingsAndStayings)
            ->union($bookingsRoomsWithoutStayings)
            ->union($roomsWithStayingsWithoutBookings)
            ->get();

        if ($getRoomsDto->capacity) {
            $filteredRooms = $filteredRooms->where('capacity', $getRoomsDto->capacity);
        }
        if ($getRoomsDto->comfortLevel) {
            $filteredRooms = $filteredRooms->where('comfort_level', $getRoomsDto->comfortLevel);
        }

        return $filteredRooms;
    }
}
