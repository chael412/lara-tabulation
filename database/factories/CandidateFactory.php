<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Candidate>
 */
class CandidateFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected static $counter = 1;

    public function definition(): array
    {
        // Ensure the counter cycles from 1 to 7
        $number = self::$counter;
        self::$counter = self::$counter < 10 ? self::$counter + 1 : 1;

        return [
            'candidate_number' => $number,
            'candidate_name' => fake()->firstNameFemale . ' ' . fake()->lastName,
        ];
    }
}
