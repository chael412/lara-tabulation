<?php

namespace App\Http\Controllers\Page;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class JudgeCategoryController extends Controller
{
    public function getProductionNumber(){
        return Inertia::render('Judge/Category/ProductionNumber');
    }
}
