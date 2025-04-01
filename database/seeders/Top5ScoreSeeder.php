<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Top5ScoreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Assuming the candidates for the Top 5 are predefined
        $top5Candidates = [10, 1, 5, 8, 7]; // Top 5 candidate IDs
        $users = range(2, 8); // User IDs: 2 to 8 (Judges)

        // Categories 10 and 11 only
        $categories = [
            10 => ['min' => 30, 'max' => 40], // Top 5 Beauty: Min 20, Max 40
            11 => ['min' => 50, 'max' => 60], // Top 5 Q&A: Min 30, Max 60
        ];

        $round = 1; // Example: Round 1

        // Iterate over the top 5 candidates
        foreach ($top5Candidates as $candidate_id) {
            foreach ($users as $user_id) {
                foreach ($categories as $category_id => $range) {
                    DB::table('scores')->insert([
                        'candidate_id' => $candidate_id, // Each judge scores each top 5 candidate
                        'user_id' => $user_id, // Judge ID
                        'category_id' => $category_id,
                        'round' => $round,
                        'score' => rand($range['min'], $range['max']), // Random score within range for category 10 or 11
                        'created_at' => now(),
                        'updated_at' => now(),
                    ]);
                }
            }
        }
    }
}
