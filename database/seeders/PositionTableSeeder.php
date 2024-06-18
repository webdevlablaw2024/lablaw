<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Position;

class PositionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Position::create([
            'position'       => 'Web Developer',
            'image'          => 'john.jpg',
            'description'    => 'Membuat website',
            'is_oprec'       => '0',
        ]);

    }
}
