<?php

namespace App\Http\Controllers\Page;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminCategoryController extends Controller
{
    public function getDashboard()
    {
        return Inertia::render('Admin/Dashboard');
    }

    public function getProductionNumber()
    {
        return Inertia::render('Admin/Category/ProductionNumber');
    }
}
