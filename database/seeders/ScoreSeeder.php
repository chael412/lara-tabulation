<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ScoreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $candidates = range(1, 10); // Candidate IDs: 1 to 7
        $users = range(2, 8); // User IDs: 2 to 8 (Judges)
        $categories = [
            1 => 10, // Example: Category 1 has a max score of 10
        ];
        $round = 1; // Example: Round 1

        foreach ($candidates as $candidate_id) {
            foreach ($users as $user_id) {
                foreach ($categories as $category_id => $max_score) {
                    DB::table('scores')->insert([
                        'candidate_id' => $candidate_id, // Each judge scores each candidate
                        'user_id' => $user_id, // Judge ID
                        'category_id' => $category_id,
                        'round' => $round,
                        'score' => rand(5, $max_score), // Random score from 5 to max
                        'created_at' => now(),
                        'updated_at' => now(),
                    ]);
                }
            }
        }
    }
}
