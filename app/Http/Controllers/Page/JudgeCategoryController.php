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
    public function getJeansWear(){
        return Inertia::render('Judge/Category/JeansWear');
    }
    public function getCasualWear(){
        return Inertia::render('Judge/Category/CasualWear');
    }
    public function getBeauty(){
        return Inertia::render('Judge/Category/Beauty');
    }
    public function getFestivalAttire(){
        return Inertia::render('Judge/Category/FestivalAttire');
    }
    public function getGown(){
        return Inertia::render('Judge/Category/Gown');
    }
    public function getQandA(){
        return Inertia::render('Judge/Category/QandA');
    }
    public function getSwimsuit(){
        return Inertia::render('Judge/Category/Swimsuit');
    }
    public function getTalent(){
        return Inertia::render('Judge/Category/Talent');
    }

    public function storeProductionNumber(Request $request){
        return response()->json($request);
    }

}
