<?php

namespace App\Http\Controllers\Api\V1\Client;

use App\DTO\AddClientBookingDto;
use App\Http\Controllers\Controller;
use App\Http\Requests\AddClientBookingRequest;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function bookRoom(AddClientBookingRequest $addClientBookingRequest) {
        $addClientBookingDto = AddClientBookingDto::fromRequest($addClientBookingRequest);
        
        return response()->noContent();
    }
}
