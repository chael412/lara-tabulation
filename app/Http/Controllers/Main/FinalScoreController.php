<?php

namespace App\Http\Controllers\Main;

use App\Http\Controllers\Controller;
use App\Models\Candidate;
use Illuminate\Http\Request;

class FinalScoreController extends Controller
{
    public function qaFinal()
    {
        // Filter candidates with top_five = 'yes' and category_id = 11
        $candidates = Candidate::with([
            'scores' => function ($query) {
                $query->where('category_id', 11);
            },
            'scores.user'
        ])->where('top_five', 'yes')->get(); // Add the condition for top_five

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

    public function beautyFinal()
    {
        // Filter candidates with top_five = 'yes' and category_id = 10
        $candidates = Candidate::with([
            'scores' => function ($query) {
                $query->where('category_id', 10);
            },
            'scores.user'
        ])->where('top_five', 'yes')->get(); // Add the condition for top_five


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
}
