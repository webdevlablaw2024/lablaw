<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        User::create([
            'name' => 'Admin Lablaw',
            'email' => 'admin.lablaw@lablaw.id',
            'email_verified_at' => Carbon::now(),
            'password' => Hash::make('admin.lablaw123'),
            'role' => 'admin',
        ]);
    }
}
