<?php

namespace App\Services;

use App\DTO\GetRoomsDto;
use App\Models\Room;
use Illuminate\Database\Eloquent\Builder;

class RoomService
{
    public function getAvailableRooms(GetRoomsDto $getRoomsDto)
    {
        $roomsWithoutBookings = Room::query()->whereDoesntHave('bookings')->where([
            'is_busy' => false
        ]);

        $filteredRooms = Room::query()->whereHas('bookings', function ($query) use ($getRoomsDto) {
            $query->where(function (Builder $q) use ($getRoomsDto) {
                $q->where('check_out', '<=', now())
                ->where(function (Builder $q) use ($getRoomsDto) {
                    $q->whereNotBetween('check_in', [$getRoomsDto->checkIn, $getRoomsDto->checkOut])
                    ->orWhereNotBetween('check_out', [$getRoomsDto->checkIn, $getRoomsDto->checkOut]);
                });
            });
        })->where([
            'is_busy' => false
        ]);
        
        $filteredRooms = $roomsWithoutBookings->union($filteredRooms)->get();
        if ($getRoomsDto->capacity) {
            $filteredRooms = $filteredRooms->where('capacity', $getRoomsDto->capacity);
        }
        if ($getRoomsDto->comfortLevel) {
            $filteredRooms = $filteredRooms->where('comfort_level', $getRoomsDto->comfortLevel);
        }
        return $filteredRooms;
    }
}
