<?php

namespace App\Http\Controllers\Page;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminCategoryController extends Controller
{
    public function getQATopFive()
    {
        return Inertia::render('Admin/Category/QATopFive');
    }
    public function getBeautyTopFive()
    {
        return Inertia::render('Admin/Category/BeautyTopFive');
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
