<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Member;

class MemberTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Member::create([
            'name' => 'John Doe',
            'gender' => 'laki-laki',
            'image' => 'john.jpg',
            'position' => 'Web Developer',
        ]);

    }
}
