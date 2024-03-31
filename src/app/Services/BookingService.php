<?php

namespace App\Services;

use App\DTO\AddBoockingDto;
use App\DTO\AddClientBookingDto;
use App\Models\Booking;
use App\Models\Client;
use App\Models\ClientPassport;
use App\Models\Room;
use Carbon\Carbon;
use Exception;

class BookingService
{
    public function getAll()
    {
        return Booking::with(['room', 'client.passport'])->get();
    }

    public function createBoocking(AddBoockingDto $addBoockingDto)
    {
        /** @var ?Room */
        $room = Room::query()->find($addBoockingDto->roomId);
        if (!$room) {
            throw new Exception('aboba');
        }
        /** @var ?Client */
        $client = Client::query()->find($addBoockingDto->clientId);
        if (!$client) {
            throw new Exception('aboba');
        }

        $checkIn = Carbon::parse($addBoockingDto->checkIn);
        $checkOut = Carbon::parse($addBoockingDto->checkOut);
        $diffDays = $checkIn->diffInDays($checkOut);

        $totalDiscount = $client->categories()->get()->sum('category.discount.value');
        $price = $room->price - ($room->price * $diffDays * $totalDiscount / 100);

        $booking = $room->bookings()->create([
            'room_id' => $addBoockingDto->roomId,
            'client_id' => $addBoockingDto->clientId,
            'check_in' => $addBoockingDto->checkIn,
            'check_out' => $addBoockingDto->checkOut,
            'price' => $price
        ]);

        return $booking;
    }

    public function deleteBooking(int $bookingId)
    {
        return Booking::query()->where('id', $bookingId)->delete();
    }

    public function createClientBooking(AddClientBookingDto $addClientBookingDto)
    {
        /** @var ?ClientPassport */
        $passport = ClientPassport::query()->firstWhere([
            'number' => $addClientBookingDto->passportNumber,
            'series' => $addClientBookingDto->passportSeries
        ]);
        if (!$passport) {
            /** @var Client */
            $client = Client::query()->create([
                'first_name' => $addClientBookingDto->firstName,
                'last_name' => $addClientBookingDto->lastName,
                'middle_name' => $addClientBookingDto->middleName
            ]);

            /** @var ClientPassport */
            $passport = $client->passport()->create([
                'number' => $addClientBookingDto->passportNumber,
                'series' => $addClientBookingDto->passportSeries
            ]);
        }
        $passport->refresh();
        $addBookingDto = new AddBoockingDto(
            roomId: $addClientBookingDto->roomId,
            clientId: $passport->client->id,
            checkOut: $addClientBookingDto->checkOut,
            checkIn: $addClientBookingDto->checkIn
        );
        return $this->createBoocking($addBookingDto);
    }
}
