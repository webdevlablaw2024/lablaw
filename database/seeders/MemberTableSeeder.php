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
            'position_id'   => 1,
            'name'          => 'John Doe',
            'gender'        => 'male',
            'image'         => 'john.jpg',
        ]);

    }
}
