<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\LowonganInternship;

class LowonganInternshipTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        LowonganInternship::create([
            'nama_lowongan' => 'Web Developer Intern',
            'deskripsi' => 'Pekerjaan ini melibatkan pengembangan perangkat lunak menggunakan teknologi Laravel-InertiaJS-ReactJS',
            'area' => 'remote',
        ]);
    }
}
