<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('home');
});

Route::get('/about', function () {
    return inertia('about');
});

Route::get('/contact', function () {
    return inertia('contact');
});

