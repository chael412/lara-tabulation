<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            ['category_name' => 'Production number', 'percentage' => 10],
            ['category_name' => 'Jeans wear', 'percentage' => 10],
            ['category_name' => 'Festival attire', 'percentage' => 10],
            ['category_name' => 'Casual wear', 'percentage' => 10],
            ['category_name' => 'Swimsuit', 'percentage' => 10],
            ['category_name' => 'Talent', 'percentage' => 15],
            ['category_name' => 'Gown', 'percentage' => 10],
            ['category_name' => 'Q&A', 'percentage' => 20],
            ['category_name' => 'Beauty', 'percentage' => 5],
            ['category_name' => 'Top 5 Beauty', 'percentage' => 40],
            ['category_name' => 'Top 5 Q&A', 'percentage' => 60],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}
