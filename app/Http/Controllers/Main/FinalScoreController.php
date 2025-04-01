<?php

namespace App\Http\Controllers\Main;

use App\Http\Controllers\Controller;
use App\Models\Candidate;
use App\Models\Category;
use Illuminate\Http\Request;

class FinalScoreController extends Controller
{
    public function tallyFinal()
    {
        // Fetch only categories 10 to 11 and ensure they have names
        $categories = Category::whereIn('id', range(10, 11))
            ->get()
            ->mapWithKeys(function ($category) {
                return [$category->id => $category->category_name];
            });

        // Get only candidates where `top_five` is 'yes'
        $candidates = Candidate::with(['scores'])
            ->where('top_five', 'yes')
            ->get();

        $candidateScores = [];

        foreach ($candidates as $candidate) {
            // Initialize scores_by_category with only categories 10 and 11
            $scoresByCategory = [];
            foreach ($categories as $categoryId => $categoryName) {
                $scoresByCategory[$categoryId] = [
                    'category_name' => $categoryName,
                    'total_score'   => 0,
                    'avg_score'     => 0,
                ];
            }

            // Populate actual scores grouped by category (only categories 10-11 are considered)
            foreach ($candidate->scores->groupBy('category_id') as $categoryId => $scores) {
                if (isset($scoresByCategory[$categoryId])) {
                    $total = $scores->sum('score');
                    $avg = $scores->count() > 0 ? round($scores->avg('score'), 2) : 0;
                    $scoresByCategory[$categoryId]['total_score'] = $total;
                    $scoresByCategory[$categoryId]['avg_score']   = $avg;
                }
            }

            // Compute total score across categories 10 and 11
            $overallTotalScore = array_sum(array_column($scoresByCategory, 'total_score'));

            // Compute overall average score across categories 10 and 11
            $overallAvgScore = count($scoresByCategory) > 0
                ? round($overallTotalScore / count($scoresByCategory), 2)
                : 0;

            // Calculate final score as the sum of avg_score for categories 10 and 11
            $finalScore = array_sum(array_column($scoresByCategory, 'avg_score'));

            $candidateScores[] = [
                'candidate_id'       => $candidate->id,
                'candidate_number'   => $candidate->candidate_number,
                'candidate_name'     => $candidate->candidate_name,
                'scores_by_category' => $scoresByCategory,
                'overall_total_score' => $overallTotalScore,
                'overall_avg_score'  => $overallAvgScore,
                'final_score'        => round($finalScore, 2),  // Round to two decimal places
            ];
        }

        // Rank candidates based on the overall total score (highest first)
        usort($candidateScores, fn($a, $b) => $b['overall_total_score'] <=> $a['overall_total_score']);

        // Assign ranking (handling ties)
        $rank = 1;
        $previousScore = null;
        foreach ($candidateScores as $index => &$candidate) {
            if ($previousScore !== null && $candidate['overall_total_score'] < $previousScore) {
                $rank = $index + 1;
            }
            $candidate['rank'] = $rank;
            $previousScore = $candidate['overall_total_score'];
        }

        return response()->json([
            'candidates' => $candidateScores
        ]);
    }


    // public function tallyFinal()
    // {
    //     // Fetch only categories 10 to 11 and ensure they have names
    //     $categories = Category::whereIn('id', range(10, 11))
    //         ->get()
    //         ->mapWithKeys(function ($category) {
    //             return [$category->id => $category->category_name];
    //         });

    //     // Get all candidates with their scores
    //     $candidates = Candidate::with(['scores'])->get();

    //     $candidateScores = [];

    //     foreach ($candidates as $candidate) {
    //         // Initialize scores_by_category with only categories 10 and 11
    //         $scoresByCategory = [];
    //         foreach ($categories as $categoryId => $categoryName) {
    //             $scoresByCategory[$categoryId] = [
    //                 'category_name' => $categoryName,
    //                 'total_score'   => 0,
    //                 'avg_score'     => 0,
    //             ];
    //         }

    //         // Populate actual scores grouped by category (only categories 10-11 are considered)
    //         foreach ($candidate->scores->groupBy('category_id') as $categoryId => $scores) {
    //             if (isset($scoresByCategory[$categoryId])) {
    //                 $total = $scores->sum('score');
    //                 $avg = $scores->count() > 0 ? round($scores->avg('score'), 2) : 0;
    //                 $scoresByCategory[$categoryId]['total_score'] = $total;
    //                 $scoresByCategory[$categoryId]['avg_score']   = $avg;
    //             }
    //         }

    //         // Compute total score across categories 10 and 11
    //         $overallTotalScore = array_sum(array_column($scoresByCategory, 'total_score'));

    //         // Compute overall average score across categories 10 and 11
    //         $overallAvgScore = count($scoresByCategory) > 0
    //             ? round($overallTotalScore / count($scoresByCategory), 2)
    //             : 0;

    //         // Calculate final score as the sum of avg_score for categories 10 and 11
    //         $finalScore = 0;
    //         foreach ($scoresByCategory as $categoryId => $categoryData) {
    //             $finalScore += $categoryData['avg_score'];  // Add the average score for each category
    //         }

    //         $candidateScores[] = [
    //             'candidate_id'       => $candidate->id,
    //             'candidate_number'   => $candidate->candidate_number,
    //             'candidate_name'     => $candidate->candidate_name,
    //             'scores_by_category' => $scoresByCategory,
    //             'overall_total_score' => $overallTotalScore,
    //             'overall_avg_score'  => $overallAvgScore,
    //             'final_score'        => round($finalScore, 2),  // Round to two decimal places
    //         ];
    //     }

    //     // Rank candidates based on the overall total score (highest first)
    //     usort($candidateScores, fn($a, $b) => $b['overall_total_score'] <=> $a['overall_total_score']);

    //     // Assign ranking (handling ties)
    //     $rank = 1;
    //     $previousScore = null;
    //     foreach ($candidateScores as $index => &$candidate) {
    //         if ($previousScore !== null && $candidate['overall_total_score'] < $previousScore) {
    //             $rank = $index + 1;
    //         }
    //         $candidate['rank'] = $rank;
    //         $previousScore = $candidate['overall_total_score'];
    //     }

    //     return response()->json([
    //         'candidates' => $candidateScores
    //     ]);
    // }



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
