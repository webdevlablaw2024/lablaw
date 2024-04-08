<?php

namespace App\Http\Controllers;

use App\Models\Position;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PositionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         //get all position
         $position = Position::latest()->get();

        //return view
        return Inertia::render('Admin/Internship/Position/Position', [
             'position' => $position
         ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Internship/Position/AddPosition');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'position'   => 'required',
            // 'image' => 'required',
            'description' => 'required',
        ]);

        Position::create([
            'position'     => $request->position,
            // 'image'   => $request->image,
            'description'   => $request->description,
        ]);

        //redirect
        return redirect()->route('Admin/Internship/Position/Position')->with('success', 'Data Position Berhasil Ditambahkan!');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        //
        $position = Position::latest()->get($id);

        return Inertia::render('Admin/Internship/Position/ShowPosition', [
            'position' => $position
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        //
        return Inertia::render('Admin/Internship/Position/EditPosition');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        //
        $request->validate([
            'position'   => 'required',
            // 'image' => 'required',
            'description' => 'required',
        ]);

        Position::update([
            'position'     => $request->position,
            // 'image'   => $request->image,
            'description'   => $request->description,
        ]);

        //redirect
        return redirect()->route('Admin/Internship/Position/Position')->with('success', 'Data Position Berhasil Diupdate!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $position->delete();

        return redirect()->route('Admin/Internship/Position/Article')->with('success', 'Data Berhasil Dihapus!');
    }
}
