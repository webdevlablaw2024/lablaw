<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Artikel;
use App\Models\Member;
use App\Models\Position;
use App\Models\Internship;
use Inertia\Inertia;

class OverviewController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //get all artikel
        $artikel = Artikel::latest()->get();
        $internship = Internship::latest()->get();
        $artikelCount = Artikel::count();
        $memberCount = Member::count();
        $positionCount = Position::count();
        $internshipCount = Internship::count();

        //return view
        return Inertia::render('Admin/Overview', [
            'artikel' => $artikel,
            'internship' => $internship,
            'artikelCount' => $artikelCount,
            'memberCount' => $memberCount,
            'positionCount' => $positionCount,
            'internshipCount' => $internshipCount
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
