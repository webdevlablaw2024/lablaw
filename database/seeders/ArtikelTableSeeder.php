<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Artikel;

class ArtikelTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $artikel = ([
                'title' => 'Edukasi hukum',
                'author' => 'Maleo',
                'image' => 'artikel.jpg',
                'description' => 'Berita hukum terkini.',
                'tag' => 'tag1, tag2, tag3',
        ]);
    }
}
