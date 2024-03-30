<?php

use Illuminate\Support\Facades\Route;

Route::get('/reception/{path?}', function () {
    return view('reception-panel.index');
})->where('path', '^(?!api).*$');

Route::get('/{path?}', function () {
    return view('client-panel.index');
})->where('path', '^(?!api|reception).*$');
