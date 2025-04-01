<?php

use App\Http\Controllers\Main\FinalScoreController;
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

    Route::get('production_ranking', [ScoreController::class, 'productionRanking']);
    Route::get('jean_ranking', [ScoreController::class, 'jeanRanking']);
    Route::get('festival_ranking', [ScoreController::class, 'festivalRanking']);
    Route::get('casual_ranking', [ScoreController::class, 'casualRanking']);
    Route::get('swimsuit_ranking', [ScoreController::class, 'swimsuitRanking']);
    Route::get('talent_ranking', [ScoreController::class, 'talentRanking']);
    Route::get('gown_ranking', [ScoreController::class, 'gownRanking']);
    Route::get('qa_ranking', [ScoreController::class, 'qaRanking']);
    Route::get('beauty_ranking', [ScoreController::class, 'beautyRanking']);

    Route::get('beauty_final', [FinalScoreController::class, 'beautyFinal']);
    Route::get('qa_final', [FinalScoreController::class, 'qaFinal']);
});


Route::post('storeproduction', [JudgeCategoryController::class, 'storeScores'])->name('storeproduction');
Route::post('storefinalscores', [JudgeCategoryController::class, 'storeFinalScores'])->name('storefinalscores');
