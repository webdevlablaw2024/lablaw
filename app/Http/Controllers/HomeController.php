<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Artikel;
use App\Models\Internship;
use App\Models\Member;
use App\Models\Position;
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
    public function internship()
    {
        $positions = Position::where('is_oprec', true)->get();

        return Inertia::render('InternshipPage', [
            'positions' => $positions,
        ]);
    }
    public function team()
    {
        $members = Member::with("position")->get();

        return Inertia::render('TeamPage', [
            'members' => $members,
        ]);
    }
    public function showInternship($id)
    {
        $position = Position::findOrFail($id);
        return Inertia::render('PositionDetailPage', ['position' => $position]);
    }
}
