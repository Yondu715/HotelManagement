<?php

use App\Http\Controllers\Api\V1\Receptionist\AuthController;
use App\Http\Controllers\Api\V1\Receptionist\BookingController;
use App\Http\Controllers\Api\V1\Receptionist\ClientController;
use App\Http\Controllers\Api\V1\Receptionist\RoomController;
use App\Http\Controllers\Api\V1\Receptionist\StatisticController;
use App\Http\Controllers\Api\V1\Receptionist\StayingController;
use Illuminate\Support\Facades\Route;

Route::prefix('auth')
    ->group(function () {
        Route::post('/login', [AuthController::class, 'login']);
        Route::post('/register', [AuthController::class, 'register']);
    });

Route::prefix('clients')
    ->middleware('auth:sanctum')
    ->group(function () {
        Route::get('/', [ClientController::class, 'index']);
        Route::post('/', [ClientController::class, 'store']);
    });

Route::prefix('rooms')
    ->middleware('auth:sanctum')
    ->group(function () {
        Route::get('/', [RoomController::class, 'getAvailableRooms']);
    });

Route::prefix('stayings')
    ->middleware('auth:sanctum')
    ->group(function () {
        Route::get('/', [StayingController::class, 'index']);
        Route::post('/', [StayingController::class, 'store']);
        Route::put('/', [StayingController::class, 'update']);
    });

Route::prefix('bookings')
    ->middleware('auth:sanctum')
    ->group(function () {
        Route::get('/', [BookingController::class, 'index']);
        Route::post('/', [BookingController::class, 'store']);
        Route::delete('/{bookingId}', [BookingController::class, 'destroy']);
    });

Route::prefix('statistic')
    ->middleware('auth:sanctum')
    ->group(function () {
        Route::get('/', [StatisticController::class, 'index']);
    });
