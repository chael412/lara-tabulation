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
        $candidates = range(1, 10); // Candidate IDs: 1 to 10
        $users = range(2, 8); // User IDs: 2 to 8 (Judges)
        $categories = [
            1 => ['min' => 5, 'max' => 10], // Production number: Min 5, Max 10
            2 => ['min' => 5, 'max' => 10], // Jeans wear: Min 5, Max 10
            3 => ['min' => 5, 'max' => 10], // Festival attire: Min 5, Max 10
            4 => ['min' => 5, 'max' => 10], // Casual wear: Min 5, Max 10
            5 => ['min' => 5, 'max' => 10], // Swimsuit: Min 5, Max 10
            6 => ['min' => 10, 'max' => 15], // Talent: Min 10, Max 15
            7 => ['min' => 5, 'max' => 10], // Gown: Min 5, Max 10
            8 => ['min' => 15, 'max' => 20], // Q&A: Min 15, Max 20
            9 => ['min' => 3, 'max' => 5], // Beauty: Min 3, Max 5
            // 10 => ['min' => 20, 'max' => 40], // Top 5 Beauty: Min 20, Max 40
            // 11 => ['min' => 30, 'max' => 60], // Top 5 Q&A: Min 30, Max 60
        ];

        $round = 1; // Example: Round 1

        foreach ($candidates as $candidate_id) {
            foreach ($users as $user_id) {
                foreach ($categories as $category_id => $range) {
                    DB::table('scores')->insert([
                        'candidate_id' => $candidate_id, // Each judge scores each candidate
                        'user_id' => $user_id, // Judge ID
                        'category_id' => $category_id,
                        'round' => $round,
                        'score' => rand($range['min'], $range['max']), // Random score within range
                        'created_at' => now(),
                        'updated_at' => now(),
                    ]);
                }
            }
        }
    }
}
