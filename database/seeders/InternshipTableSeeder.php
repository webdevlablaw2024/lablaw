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
            'lowongan_internship_id' => 1,
            'nama' => 'John Doe',
            'alamat' => '123 Street',
            'no_telepon' => '1234567890',
            'tgl_lahir' => '2000-01-01',
            'portofolio' => 'portofolio.pdf',
            'cv' => 'cv.pdf',
        ]);

    }
}
