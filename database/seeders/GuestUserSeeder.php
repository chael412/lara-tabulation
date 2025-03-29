<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;

class GuestUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create the judge role if it doesn't exist
        $judgeRole = Role::firstOrCreate(['name' => 'judge']);

        // Create 7 judge users
        for ($i = 1; $i <= 7; $i++) {
            $user = User::create([
                'name' => "Judge{$i}",
                'email' => "judge{$i}@gmail.com",
                'password' => Hash::make('123123123'), // Use a secure password
                'email_verified_at' => Carbon::now(), // Automatically verify the email
            ]);

            // Assign the judge role to the user
            $user->assignRole($judgeRole);
        }

        $this->command->info("✅ 7 Judge Users seeded successfully!");
    }
}
