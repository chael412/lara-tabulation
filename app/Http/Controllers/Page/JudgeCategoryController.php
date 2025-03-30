<?php

namespace App\Http\Controllers\Page;

use App\Http\Controllers\Controller;
use App\Models\Score;
use Illuminate\Http\Request;
use Inertia\Inertia;

class JudgeCategoryController extends Controller
{
    public function getProductionNumber()
    {
        return Inertia::render('Judge/Category/ProductionNumber');
    }
    public function getJeansWear()
    {
        return Inertia::render('Judge/Category/JeansWear');
    }
    public function getCasualWear()
    {
        return Inertia::render('Judge/Category/CasualWear');
    }
    public function getBeauty()
    {
        return Inertia::render('Judge/Category/Beauty');
    }
    public function getFestivalAttire()
    {
        return Inertia::render('Judge/Category/FestivalAttire');
    }
    public function getGown()
    {
        return Inertia::render('Judge/Category/Gown');
    }
    public function getQandA()
    {
        return Inertia::render('Judge/Category/QandA');
    }
    public function getSwimsuit()
    {
        return Inertia::render('Judge/Category/Swimsuit');
    }
    public function getTalent()
    {

        return Inertia::render('Judge/Category/Talent');
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
                    $average = round(($value / 100) * $data['percentage'], 2);
                    // Prepare an array for bulk insertion
                    $scores[] = [
                        'category_id' => $data['category_id'],
                        'user_id' => $data['user_id'],
                        'candidate_id' => (int) $candidateNumber + 1, // Adjusting candidate numbering
                        'round' => 1,
                        'score' => $average,
                    ];
                }
            }
            Score::insert($scores);

            // Return JSON response (for debugging)
            return response()->json([
                'message' => 'Data received successfully!',
                'data' => $data,
                'data3' => $scores
            ], 200);
    }
}
