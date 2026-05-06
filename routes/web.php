<?php

use App\Http\Controllers\ReplyController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ForumController;
use App\Http\Controllers\RegisterController;
use Illuminate\Support\Facades\Route;


// Route::get('/', fn () => inertia('auth/login'));




//     Route::get('/dashboard', [DashboardController::class,'index']);

    Route::middleware('guest')->group(function () {
    Route::get('/login', [AuthController::class, 'create'])->name('login');
    Route::post('/login', [AuthController::class, 'store']);
    
    Route::get('/register', [RegisterController::class, 'index'])->name('register.index');
    Route::post('/register', [RegisterController::class, 'register'])->name('register.post');
});

Route::post('/logout', [AuthController::class, 'destroy'])
            ->middleware('auth');

   Route::middleware('auth')->group(function () {
    
        Route::get('/', [ForumController::class, 'index'])->name('forum');
        Route::get('/forum/{id}', [ForumController::class, 'show'])->name('forum.show');
        
        




        Route::post('/forum/create', [ForumController::class, 'store'])->name('forum.create');
        Route::post('/forum/{forumId}/reply', [ReplyController::class, 'store'])->name('reply.create');
    });

//    Route::middleware(['auth', 'role:admin,akademik'])
//     ->prefix('admin')
//     ->group(function () {

//         Route::get('/pengajuan', [AdminPengajuanController::class, 'index'])
//             ->name('admin.pengajuan.index');

//         Route::patch(
//             '/pengajuan/{pengajuan}/status',
//             [AdminPengajuanController::class, 'updateStatus']
//         )->name('admin.pengajuan.update');
//     });
