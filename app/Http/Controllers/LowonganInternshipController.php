<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\LowonganInternship;
use Inertia\Inertia;

class LowonganInternshipController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $lowongan_internship = LowonganInternship::latest()->get();

        return Inertia::render('Admin/LowonganInternship', [
            'lowongan_internship' => $lowongan_internship
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('Admin/LowonganInternship/AddLowonganInternship');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'nama_lowongan'   => 'required',
            'deskripsi' => 'required',
            'area' => 'required',
        ]);

        LowonganInternship::create([
            'nama_lowongan'     => $request->nama_lowongan,
            'deskripsi'   => $request->deskripsi,
            'area'   => $request->area,
        ]);

        return redirect()->route('Admin/LowonganInternship')->with('success', 'Data Lowongan Internship Berhasil Ditambahkan!');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        //
        $lowongan_internship = LowonganInternship::latest()->get($id);

        return Inertia::render('Admin/LowonganInternship', [
            'lowongan_internship' => $lowongan_internship
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        //
        return Inertia::render('Admin/LowonganInternship/EditLowonganInternship');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        //
        $request->validate([
            'nama_lowongan'   => 'required',
            'deskripsi' => 'required',
            'area' => 'required',
        ]);

        LowonganInternship::create([
            'nama_lowongan'    => $request->nama_lowongan,
            'deskripsi'   => $request->deskripsi,
            'area'   => $request->area,
        ]);

        return redirect()->route('Admin/LowonganInternship')->with('success', 'Data Lowongan Internship Berhasil Diupdate!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $lowongan_internship->delete();

        return redirect()->route('Admin/LowonganInternship')->with('success', 'Data Berhasil Dihapus!');
    }
}
