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
    public function definition(): array
    {
        return [
            'candidate_number' => $this->faker->numberBetween(1, 7),
            'candidate_name' => $this->faker->firstNameFemale . ' ' . $this->faker->lastName,
        ];
    }
}
