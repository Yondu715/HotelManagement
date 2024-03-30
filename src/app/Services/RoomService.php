<?php

namespace App\Services;

use App\DTO\GetRoomsDto;
use App\Models\Booking;
use App\Models\Room;
use App\Models\Staying;
use Illuminate\Database\Eloquent\Builder;

class RoomService
{
    public function getAvailableRooms(GetRoomsDto $getRoomsDto)
    {

        $bookings = Booking::query()
            ->where('check_in', '>', now())
            ->where(function (Builder $query) use ($getRoomsDto) {
                $query->whereNotBetween('check_in', [$getRoomsDto->checkIn, $getRoomsDto->checkOut])
                    ->orWhereNotBetween('check_out', [$getRoomsDto->checkIn, $getRoomsDto->checkOut]);
            })->get();

        $stayings = Staying::query()->where([
            'check_out' => null
        ])->get();

        $reservations = $bookings->merge($stayings);
        $reservationsIds = $reservations->pluck('room_id')->unique();

        $availableRooms = Room::all()->whereNotIn('id', $reservationsIds);

        if ($getRoomsDto->capacity) {
            $availableRooms = $availableRooms->where('capacity', $getRoomsDto->capacity);
        }
        if ($getRoomsDto->comfortLevel) {
            $availableRooms = $availableRooms->where('comfort_level', $getRoomsDto->comfortLevel);
        }

        return $availableRooms;
    }
}
