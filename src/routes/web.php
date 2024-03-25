<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\RoomController;
use Illuminate\Support\Facades\Route;

Route::get('/{path}', function () {
    return view('index');
})->where('path', '^(?!api).*$');;

// Route::prefix('admin')
//     ->name('admin.')
//     ->group(function () {
//         Route::get('/login', [AuthController::class, 'loginForm'])->name('login');
//         Route::post('/login', [AuthController::class, 'login']);

//         Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

//         Route::prefix('clients')
//         ->name('clients.')
//         ->group(function () {
//             Route::get('/', [ClientController::class, 'index'])->name('index');
//             Route::post('/', [ClientController::class, 'store'])->name('store');
//             Route::get('/create', [ClientController::class, 'create'])->name('create');
//         });


//         Route::get('/rooms', [RoomController::class, 'index'])->name('rooms.index');
//         Route::get('/bookings')->name('bookings');
//     });
