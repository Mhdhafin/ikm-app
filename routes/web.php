<?php

use App\Http\Controllers\AdminPengajuanController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PengajuanKelasPenggantiController;
use App\Http\Controllers\RegisterController;
use Illuminate\Support\Facades\Route;


// Route::get('/', fn () => inertia('auth/login'));


Route::get('/login', [AuthController::class, 'create'])
    ->middleware('guest')
    ->name('login');

Route::post('/login', [AuthController::class, 'store'])
    ->middleware('guest');

Route::post('/logout', [AuthController::class, 'destroy'])
    ->middleware('auth');




    Route::get('/dashboard', [DashboardController::class,'index']);

   Route::middleware(['auth', 'role:mahasiswa'])->group(function () {
      Route::get('/pengajuan-kelas', [PengajuanKelasPenggantiController::class, 'index'])
        ->name('pengajuan-kelas.index');

    Route::post('/pengajuan-kelas', [PengajuanKelasPenggantiController::class, 'store'])
        ->name('pengajuan-kelas.store');
    });

   Route::middleware(['auth', 'role:admin,akademik'])
    ->prefix('admin')
    ->group(function () {

        Route::get('/pengajuan', [AdminPengajuanController::class, 'index'])
            ->name('admin.pengajuan.index');

        Route::patch(
            '/pengajuan/{pengajuan}/status',
            [AdminPengajuanController::class, 'updateStatus']
        )->name('admin.pengajuan.update');
    });
