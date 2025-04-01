<?php

use App\Http\Controllers\Page\AdminCategoryController;
use App\Http\Controllers\Page\AdminUserController;
use App\Http\Controllers\Page\CandidateController;
use App\Http\Controllers\Page\JudgeCategoryController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Auth/Login');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'role:admin'])->prefix('admin')->group(function () {
    Route::resource('user', AdminUserController::class);

    Route::get('dashboard', [AdminCategoryController::class, 'getDashboard'])->name('admin.dashboard');



    Route::get('productionnumber', [AdminCategoryController::class, 'getProductionNumber'])->name('admin.productionnumber');
    Route::get('jean', [AdminCategoryController::class, 'getJeanWear'])->name('admin.jean');
    Route::get('festival', [AdminCategoryController::class, 'getFestivalAttire'])->name('admin.festival');
    Route::get('casual', [AdminCategoryController::class, 'getCasualWear'])->name('admin.casual');
    Route::get('swimsuit', [AdminCategoryController::class, 'getSwimsuit'])->name('admin.swimsuit');
    Route::get('talent', [AdminCategoryController::class, 'getTalent'])->name('admin.talent');
    Route::get('gown', [AdminCategoryController::class, 'getGown'])->name('admin.gown');
    Route::get('qa', [AdminCategoryController::class, 'getQA'])->name('admin.qa');
    Route::get('beauty', [AdminCategoryController::class, 'getBeauty'])->name('admin.beauty');

    Route::get('beautyfinal', [AdminCategoryController::class, 'getBeautyFinal'])->name('admin.beautyfinal');
    Route::get('qafinal', [AdminCategoryController::class, 'getQAFinal'])->name('admin.qafinal');

    Route::get('tallyprelim', [AdminCategoryController::class, 'getTallyPrelim'])->name('admin.tallyprelim');
    Route::get('tallyfinal', [AdminCategoryController::class, 'getTallyFinal'])->name('admin.tallyfinal');

    Route::get('candidate', [CandidateController::class, 'getCandidates'])->name('admin.candidate.index');
    Route::get('settopfive/{candidate}', [CandidateController::class, 'setTopFive'])->name('admin.settopfive');
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
    Route::get('beautyfinal', [JudgeCategoryController::class, 'getBeautyFinal'])->name('beautyfinal');
    Route::get('qafinal', [JudgeCategoryController::class, 'getQAFinal'])->name('qafinal');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
