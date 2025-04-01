<?php

namespace App\Http\Controllers\Page;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminCategoryController extends Controller
{


    public function getTallyFinal()
    {
        return Inertia::render('Admin/Category/TallyFinal');
    }

    public function getTallyPrelim()
    {
        return Inertia::render('Admin/Category/TallyPrelim');
    }
    public function getQAFinal()
    {
        return Inertia::render('Admin/Category/FinalQA');
    }
    public function getBeautyFinal()
    {
        return Inertia::render('Admin/Category/FinalBeauty');
    }
    public function getBeauty()
    {
        return Inertia::render('Admin/Category/Beauty');
    }
    public function getQA()
    {
        return Inertia::render('Admin/Category/QA');
    }
    public function getGown()
    {
        return Inertia::render('Admin/Category/Gown');
    }
    public function getTalent()
    {
        return Inertia::render('Admin/Category/Talent');
    }
    public function getSwimsuit()
    {
        return Inertia::render('Admin/Category/Swimsuit');
    }
    public function getCasualWear()
    {
        return Inertia::render('Admin/Category/CasualWear');
    }

    public function getFestivalAttire()
    {
        return Inertia::render('Admin/Category/FestivalAttire');
    }

    public function getJeanWear()
    {
        return Inertia::render('Admin/Category/JeanWear');
    }


    public function getProductionNumber()
    {
        return Inertia::render('Admin/Category/ProductionNumber');
    }

    public function getDashboard()
    {
        return Inertia::render('Admin/Dashboard');
    }
}
