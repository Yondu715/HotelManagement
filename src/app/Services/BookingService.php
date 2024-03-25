<?php

namespace App\Services;

use App\Models\Booking;

class BookingService
{
    public function getAll() {
        return Booking::with(['room', 'client.passport'])->get();
    }
}