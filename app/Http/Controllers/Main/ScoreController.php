<?php

namespace App\Http\Controllers\Main;

use App\Http\Controllers\Controller;
use App\Models\Candidate;
use App\Models\Score;
use App\Http\Requests\StoreScoreRequest;
use App\Http\Requests\UpdateScoreRequest;

class ScoreController extends Controller
{

    public function jeanRanking()
    {
        // Filter by category 2
        $candidates = Candidate::with([
            'scores' => function ($query) {
                $query->where('category_id', 2);
            },
            'scores.user'
        ])->get();


        $candidateScores = [];
        foreach ($candidates as $candidate) {
            $scoresPerJudge = $candidate->scores->groupBy('user_id')->map(function ($scores) {
                return [
                    'judge_name' => $scores->first()->user->name ?? 'Unknown',
                    'scores' => $scores->pluck('score')
                ];
            });

            // Calculate total and average score
            $totalScore = $candidate->scores->sum('score');
            $averageScore = $candidate->scores->avg('score');

            $candidateScores[] = [
                'candidate_id' => $candidate->id,
                'candidate_number' => $candidate->candidate_number,
                'candidate_name' => $candidate->candidate_name,
                'scores_per_judge' => $scoresPerJudge,
                'total_score' => $totalScore,
                'average_score' => round($averageScore, 2),
            ];
        }

        // Rank candidates based on total score (highest first)
        usort($candidateScores, fn($a, $b) => $b['total_score'] <=> $a['total_score']);

        // Assign ranking
        foreach ($candidateScores as $index => &$candidate) {
            $candidate['rank'] = $index + 1;
        }

        return response()->json([
            'candidates' => $candidateScores
        ]);
    }

    public function productionRanking()
    {
        // Filter by category 1
        $candidates = Candidate::with([
            'scores' => function ($query) {
                $query->where('category_id', 1);
            },
            'scores.user'
        ])->get();


        $candidateScores = [];
        foreach ($candidates as $candidate) {
            $scoresPerJudge = $candidate->scores->groupBy('user_id')->map(function ($scores) {
                return [
                    'judge_name' => $scores->first()->user->name ?? 'Unknown',
                    'scores' => $scores->pluck('score')
                ];
            });

            // Calculate total and average score
            $totalScore = $candidate->scores->sum('score');
            $averageScore = $candidate->scores->avg('score');

            $candidateScores[] = [
                'candidate_id' => $candidate->id,
                'candidate_number' => $candidate->candidate_number,
                'candidate_name' => $candidate->candidate_name,
                'scores_per_judge' => $scoresPerJudge,
                'total_score' => $totalScore,
                'average_score' => round($averageScore, 2),
            ];
        }

        // Rank candidates based on total score (highest first)
        usort($candidateScores, fn($a, $b) => $b['total_score'] <=> $a['total_score']);

        // Assign ranking
        foreach ($candidateScores as $index => &$candidate) {
            $candidate['rank'] = $index + 1;
        }

        return response()->json([
            'candidates' => $candidateScores
        ]);
    }





    public function getScoreRound1()
    {
        $scores = Score::with(['user', 'category', 'candidate'])
            ->where('round', 1)
            ->get()
            ->map(function ($score) {
                // Compute weighted score
                $weightedScore = ($score->score / 100) * $score->category->percentage;

                // Append computed score
                $score->weighted_score = round($weightedScore, 2); // Round to 2 decimal places

                return $score;
            });

        return response()->json($scores, 200);
    }

    // public function attireRanking()
    // {
    //     $candidates = Score::with('candidate', 'category')
    //         ->select('candidate_id', 'category_id') // Include category_id
    //         ->selectRaw('ROUND(SUM((score / 100) * categories.percentage), 2) as total_score')
    //         ->selectRaw('ROUND(AVG((score / 100) * categories.percentage), 2) as average_score')
    //         ->join('categories', 'scores.category_id', '=', 'categories.id')
    //         ->where('scores.category_id', 1) // Filter only category 1
    //         ->groupBy('candidate_id', 'category_id')
    //         ->orderByDesc('total_score')
    //         ->get();



    //     // Assign ranks
    //     $rank = 1;
    //     foreach ($candidates as $key => $candidate) {
    //         if ($key > 0 && $candidate->total_score < $candidates[$key - 1]->total_score) {
    //             $rank = $key + 1;
    //         }
    //         $candidate->rank = $rank;
    //     }

    //     return response()->json($candidates, 200);
    // }

    // public function getCandidateRanking()
    // {
    //     $candidates = Score::with('candidate', 'category')
    //         ->select('candidate_id', 'category_id') // Add category_id
    //         ->selectRaw('ROUND(SUM((score / 100) * categories.percentage), 2) as total_score')
    //         ->selectRaw('ROUND(AVG((score / 100) * categories.percentage), 2) as average_score')
    //         ->join('categories', 'scores.category_id', '=', 'categories.id')
    //         ->groupBy('candidate_id', 'category_id') // Group by category_id
    //         ->orderByDesc('total_score')
    //         ->get();


    //     // Assign ranks
    //     $rank = 1;
    //     foreach ($candidates as $key => $candidate) {
    //         if ($key > 0 && $candidate->total_score < $candidates[$key - 1]->total_score) {
    //             $rank = $key + 1;
    //         }
    //         $candidate->rank = $rank;
    //     }

    //     return response()->json($candidates, 200);
    // }


    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreScoreRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Score $score)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Score $score)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateScoreRequest $request, Score $score)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Score $score)
    {
        //
    }
}
