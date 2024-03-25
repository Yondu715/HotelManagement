<?php

namespace App\Services;

use App\DTO\GetRoomsDto;
use App\Models\Room;
use Illuminate\Database\Eloquent\Builder;

class RoomService
{
    public function getAvailableRooms(GetRoomsDto $getRoomsDto)
    {
        $roomsWithoutBookings = Room::query()->whereDoesntHave('bookings')->whereHas('stayings', function ($query) {
            $query->where('check_out', null);
        });

        $bookingsRooms = Room::query()->whereHas('bookings', function ($query) use ($getRoomsDto) {
            $query->where(function (Builder $q) use ($getRoomsDto) {
                $q->where('check_out', '<=', now())
                    ->where(function (Builder $q) use ($getRoomsDto) {
                        $q->whereNotBetween('check_in', [$getRoomsDto->checkIn, $getRoomsDto->checkOut])
                            ->orWhereNotBetween('check_out', [$getRoomsDto->checkIn, $getRoomsDto->checkOut]);
                    });
            });
        })->whereHas('stayings', function ($query) {
            $query->where('check_out', null);
        });

        $filteredRooms = $roomsWithoutBookings->union($bookingsRooms)->get();

        if ($getRoomsDto->capacity) {
            $filteredRooms = $filteredRooms->where('capacity', $getRoomsDto->capacity);
        }
        if ($getRoomsDto->comfortLevel) {
            $filteredRooms = $filteredRooms->where('comfort_level', $getRoomsDto->comfortLevel);
        }

        return $filteredRooms;
    }
}
