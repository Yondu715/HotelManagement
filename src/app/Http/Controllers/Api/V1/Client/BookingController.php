<?php

namespace App\Http\Controllers\Api\V1\Client;

use App\DTO\AddClientBookingDto;
use App\Http\Controllers\Controller;
use App\Http\Requests\AddClientBookingRequest;
use App\Services\BookingService;
use Illuminate\Http\Request;

class BookingController extends Controller
{

    public function __construct(
        private readonly BookingService $bookingService
    ) {
    }

    public function bookRoom(AddClientBookingRequest $addClientBookingRequest)
    {
        $addClientBookingDto = AddClientBookingDto::fromRequest($addClientBookingRequest);
        $this->bookingService->createClientBooking($addClientBookingDto);
        return response()->noContent();
    }
}
