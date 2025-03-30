<?php

use App\Http\Controllers\Main\ScoreController;
use App\Http\Controllers\Main\UserController;
use App\Http\Controllers\Page\JudgeCategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::middleware(['auth', 'web'])->group(function () {
    Route::resource('users', UserController::class);

    //Route::get('single_score1', [ScoreController::class, 'getScoreRound1']);
    //Route::get('overall_score1', [ScoreController::class, 'getCandidateRanking']);

    Route::get('attire_ranking1', [ScoreController::class, 'attireRanking']);
});


Route::post('storeproduction', [JudgeCategoryController::class, 'storeProductionNumber'])->name('storeproduction');
