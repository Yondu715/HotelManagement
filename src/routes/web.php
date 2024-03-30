<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect('/client');
});

Route::get('/reception/{path?}', function () {
    return view('reception-panel.index');
})->where('path', '^(?!api).*$');

Route::get('/client/{path?}', function () {
    return view('client-panel.index');
})->where('path', '^(?!api).*$');
