<?php

declare(strict_types=1);

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn () => Inertia::render('Welcome'))->name('home');

Route::get('dashboard', fn () => Inertia::render('Dashboard'))->middleware(['auth', 'verified'])->name('dashboard');

// User management routes
Route::middleware(['auth', 'can:manage-users'])
    ->group(function (): void {
        Route::resource('users', UserController::class)
            ->except(['create']);
    });

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
