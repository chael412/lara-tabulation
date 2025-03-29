<?php

use App\Http\Controllers\Main\UserController;
use App\Http\Controllers\Page\JudgeCategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::middleware(['auth', 'web'])->group(function () {
    Route::resource('users', UserController::class);
});


Route::post('storeproduction', [JudgeCategoryController::class, 'storeProductionNumber'])->name('storeproduction');
