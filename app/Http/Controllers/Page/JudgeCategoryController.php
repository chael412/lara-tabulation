<?php

namespace App\Http\Controllers\Page;

use App\Http\Controllers\Controller;
use App\Models\Score;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class JudgeCategoryController extends Controller
{
    public function getDashboard()
    {
        return Inertia::render('Judge/Dashboard');
    }
    public function getProductionNumber()
    {
        $cat = Score::query();
        $query = $cat->where('category_id', 1)
                    ->where('user_id', Auth::id()) // Get the authenticated user's ID
                    ->get(); // Retrieve results
        return Inertia::render('Judge/Category/ProductionNumber', [
            'scores' => $query
        ]);
    }
    public function getJeansWear()
    {
        $cat = Score::query();
        $query = $cat->where('category_id', 2)
                    ->where('user_id', Auth::id()) // Get the authenticated user's ID
                    ->get(); // Retrieve results
        return Inertia::render('Judge/Category/JeansWear', [
            'scores' => $query
        ]);
    }
    public function getCasualWear()
    {
        $cat = Score::query();
        $query = $cat->where('category_id', 4)
                    ->where('user_id', Auth::id()) // Get the authenticated user's ID
                    ->get(); // Retrieve results
        return Inertia::render('Judge/Category/CasualWear', [
            'scores' => $query
        ]);
    }
    public function getBeauty()
    {
        $cat = Score::query();
        $query = $cat->where('category_id', 9)
                    ->where('user_id', Auth::id()) // Get the authenticated user's ID
                    ->get(); // Retrieve results
        return Inertia::render('Judge/Category/Beauty', [
            'scores' => $query
        ]);
    }
    public function getFestivalAttire()
    {
        $cat = Score::query();
        $query = $cat->where('category_id', 3)
                    ->where('user_id', Auth::id()) // Get the authenticated user's ID
                    ->get(); // Retrieve results
        return Inertia::render('Judge/Category/FestivalAttire', [
            'scores' => $query
        ]);
    }
    public function getGown()
    {
        $cat = Score::query();
        $query = $cat->where('category_id', 7)
                    ->where('user_id', Auth::id()) // Get the authenticated user's ID
                    ->get(); // Retrieve results
        return Inertia::render('Judge/Category/Gown', [
            'scores' => $query
        ]);
    }
    public function getQandA()
    {
        $cat = Score::query();
        $query = $cat->where('category_id', 8)
                    ->where('user_id', Auth::id()) // Get the authenticated user's ID
                    ->get(); // Retrieve results
        return Inertia::render('Judge/Category/QandA', [
            'scores' => $query
        ]);
    }
    public function getSwimsuit()
    {
        $cat = Score::query();
        $query = $cat->where('category_id', 5)
                    ->where('user_id', Auth::id()) // Get the authenticated user's ID
                    ->get(); // Retrieve results
        return Inertia::render('Judge/Category/Swimsuit', [
            'scores' => $query
        ]);
    }
    public function getTalent()
    {
        $cat = Score::query();
        $query = $cat->where('category_id', 6)
                    ->where('user_id', Auth::id()) // Get the authenticated user's ID
                    ->get(); // Retrieve results
        return Inertia::render('Judge/Category/Talent', [
            'scores' => $query
        ]);
    }
    public function getBeautyFinal()
    {

        return Inertia::render('Judge/Category/FinalBeauty');
    }
    public function getQAFinal()
    {

        return Inertia::render('Judge/Category/FinalQandA');
    }

    public function storeProductionNumber(Request $request)
    {
        $data = $request->all();

        $scores = [];

        // Loop through the received data to extract scores
        foreach ($data as $key => $value) {
            if (strpos($key, 'score-') === 0) {
                // Extract the candidate number from "score-X"
                $candidateNumber = str_replace('score-', '', $key);
                // $average = round(($value / 100) * $data['percentage'], 2);
                // Prepare an array for bulk insertion
                $scores[] = [
                    'category_id' => $data['category_id'],
                    'user_id' => $data['user_id'],
                    'candidate_id' => (int) $candidateNumber + 1, // Adjusting candidate numbering
                    'round' => 1,
                    'score' => $value,
                ];
            }
        }
        Score::insert($scores);

        // Return JSON response (for debugging)
        return response()->json([
            'message' => 'Data received successfully!',
            'data' => $data,
            'scores' => $scores
        ], 200);
    }
}
