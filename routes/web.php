<?php

use App\Http\Controllers\Page\AdminCategoryController;
use App\Http\Controllers\Page\AdminUserController;
use App\Http\Controllers\Page\JudgeCategoryController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'role:admin'])->prefix('admin')->group(function () {
    Route::resource('user', AdminUserController::class);

    Route::get('productionnumber', [AdminCategoryController::class, 'getProductionNumber'])->name('admin.productionnumber');
    Route::get('jean', [AdminCategoryController::class, 'getJeanWear'])->name('admin.jean');
    Route::get('festival', [AdminCategoryController::class, 'getFestivalAttire'])->name('admin.festival');
    Route::get('casual', [AdminCategoryController::class, 'getCasualWear'])->name('admin.casual');
});

Route::middleware(['auth', 'role:judge'])->prefix('judge')->group(function () {
    Route::get('productionnumber', [JudgeCategoryController::class, 'getProductionNumber'])->name('productionnumber');
    Route::get('jeanswear', [JudgeCategoryController::class, 'getJeansWear'])->name('jeanswear');
    Route::get('casualwear', [JudgeCategoryController::class, 'getCasualWear'])->name('casualwear');
    Route::get('beauty', [JudgeCategoryController::class, 'getBeauty'])->name('beauty');
    Route::get('festivalattire', [JudgeCategoryController::class, 'getFestivalAttire'])->name('festivalattire');
    Route::get('gown', [JudgeCategoryController::class, 'getGown'])->name('gown');
    Route::get('qanda', [JudgeCategoryController::class, 'getQandA'])->name('qanda');
    Route::get('swimsuit', [JudgeCategoryController::class, 'getSwimsuit'])->name('swimsuit');
    Route::get('talent', [JudgeCategoryController::class, 'getTalent'])->name('talent');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
