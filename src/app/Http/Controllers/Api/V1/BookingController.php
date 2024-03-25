<?php

namespace App\Http\Controllers\Api\V1;

use App\DTO\AddBoockingDto;
use App\Http\Controllers\Controller;
use App\Http\Requests\AddBoockingRequest;
use App\Http\Resources\BookingResource;
use App\Services\BookingService;

class BookingController extends Controller
{

    public function __construct(
        public readonly BookingService $bookingService
    ) {
    }

    public function index()
    {
        return BookingResource::collection(
            $this->bookingService->getAll()
        );
    }

    public function store(AddBoockingRequest $addBoockingRequest) {
        $addBoockingDto = AddBoockingDto::fromRequest($addBoockingRequest);
        $this->bookingService->createBoocking($addBoockingDto);
        return response()->json()->setStatusCode(201);
    }
}
