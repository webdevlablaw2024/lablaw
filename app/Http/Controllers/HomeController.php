<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Artikel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function home()
    {
        $artikels = Artikel::latest()->take(4)->get();

        return Inertia::render('Home', [
            'artikels' => $artikels
        ]);
    }
    public function news()
    {
        $artikel = Artikel::latest()->get();

        return Inertia::render('NewsPage', [
            'artikel' => $artikel
        ]);
    }
    public function showNews($id)
    {
        $artikel = Artikel::findOrFail($id);
        $artikels = Artikel::latest()->take(4)->get();

        return Inertia::render('ShowArticle', [
            'artikel' => $artikel,
            'artikels' => $artikels
        ]);
    }
}
