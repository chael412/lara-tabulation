<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ScoreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $candidates = range(1, 7);
        $users = range(2, 8);
        $categories = [
            1 => 10,
            2 => 10,
            3 => 10,
            4 => 10,
            5 => 10,
            6 => 15,
            7 => 10,
            8 => 20,
            9 => 5,
        ];

        foreach ($candidates as $candidate_id) {
            // $category_id = array_rand($categories);
            $category_id = 1;
            $max_score = $categories[$category_id];

            DB::table('scores')->insert([
                'candidate_id' => $candidate_id,
                'user_id' => $users[array_rand($users)],
                'category_id' => $category_id,
                'score' => rand(5, $max_score),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
