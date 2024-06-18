<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Internship;

class InternshipTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Internship::create([
            'position_id'    => 1,
            'name'           => 'John Doe',
            'phone'          => '085111222333',
            'email'          => 'john@gmail.com',
            'institution'    => 'universitas',
            'major'          => 'informatika',
            'college_year'   => '2020',
            'reason'         => 'coba reason',
            'summary'        => 'coba mendeskripsikan',
            'cv'             => 'cv_ku.pdf',
            'portofolio'     => 'portofolio_ku.pdf',
        ]);

    }
}
