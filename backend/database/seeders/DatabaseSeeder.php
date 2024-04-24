<?php

namespace Database\Seeders;

use App\Models\Device;
use App\Models\Schedule;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public const DEVELOPER_EMAIL = 'developer@example.com';

    public function run(): void
    {
        User::factory()->create([
            'first_name' => 'Developer',
            'last_name' => 'Example',
            'email' => self::DEVELOPER_EMAIL,
            'email_verified_at' => now(),
            'created_at' => now(),
            'password_changed_at' => now(),
            'password' => bcrypt(env('PASSWORD_SALT', '') . 'password'),
        ]);
        User::factory()->count(5)->create();

        Device::factory()->create([
            'name' => 'Device 1',
            'light_level' => 'low',
            'warmth' => 'low',
            'status' => 'off',
        ]);

        Schedule::factory()->create([
            'name' => 'Schedule 1',
            'start_time' => '2021-01-01 00:00:00',
            'end_time' => '2021-01-01 23:59:59',
        ]);
    }
}
