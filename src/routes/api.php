<?php

use App\Http\Controllers\Api\V1\Client\BookingController;
use App\Http\Controllers\Api\V1\Client\RoomController;
use Illuminate\Support\Facades\Route;

Route::post('/bookings', [BookingController::class, 'bookRoom']);
Route::get('/rooms', [RoomController::class, 'getAvailableRooms']);