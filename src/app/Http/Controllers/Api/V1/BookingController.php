<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Services\BookingService;

class BookingController extends Controller
{

    public function __construct(
        public readonly BookingService $bookingService
    ) {
    }

    public function index()
    {
        return $this->bookingService->getAll();
    }
}
