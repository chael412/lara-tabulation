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
        $candidates = range(1, 7); // Candidate IDs: 1 to 7
        $users = range(2, 8); // User IDs: 2 to 8
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

        $userIndex = 0; // Start at first user (index 0)

        foreach ($candidates as $candidate_id) {
            $category_id = 1; // Always category 1
            $max_score = $categories[$category_id];

            DB::table('scores')->insert([
                'candidate_id' => 7, //assign manually candididates id [1...7]
                'user_id' => $users[$userIndex], // Assign user manually
                'category_id' => $category_id,
                'score' => rand(5, $max_score),
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            // Move to next user in sequence, reset if reaching the end
            $userIndex = ($userIndex + 1) % count($users);
        }
    }
}
