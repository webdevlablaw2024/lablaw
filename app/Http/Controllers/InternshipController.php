<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Internship;
use Inertia\Inertia;

class InternshipController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //get all internship
        $internship = Internship::with('lowongan_internship')->latest()->get();

        //return view
        return Inertia::render('Admin/Internship/Applicant', [
            'internship' => $internship
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('Admin/Internship/AddApplicant');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'lowongan_internship_id'   => 'required',
            'nama' => 'required',
            'alamat' => 'required',
            'no_telepon' => 'required',
            'tgl_lahir' => 'required',
            'portofolio' => 'required',
            'cv' => 'required',
        ]);

        Artikel::create([
            'lowongan_internship_id'   => $request->lowongan_internship_id,
            'nama'   => $request->nama,
            'alamat'   => $request->alamat,
            'no_telepon'   => $request->no_telepon,
            'tgl_lahir'   => $request->tgl_lahir,
            'portofolio'   => $request->portofolio,
            'cv'   => $request->cv,
        ]);

        //redirect
        return redirect()->route('Admin/Internship/Applicant')->with('success', 'Data Applicant Berhasil Ditambahkan!');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        //
        $internship = Internship::with('lowongan_internship')->find($id);

        return Inertia::render('Artikel/Show', [
            'artikel' => $artikel
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        //
        return Inertia::render('Admin/Article/EditInternship');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        //
        $request->validate([
            'lowongan_internship_id'   => 'required',
            'nama' => 'required',
            'alamat' => 'required',
            'no_telepon' => 'required',
            'tgl_lahir' => 'required',
            'portofolio' => 'required',
            'cv' => 'required',
        ]);

        Artikel::update([
            'lowongan_internship_id'    => $request->lowongan_internship_id,
            'nama'   => $request->nama,
            'alamat'   => $request->alamat,
            'no_telepon'   => $request->no_telepon,
            'tgl_lahir'   => $request->tgl_lahir,
            'portofolio'   => $request->portofolio,
            'cv'   => $request->cv,
        ]);

        return redirect()->route('Admin/Internship/Applicant')->with('success', 'Data Applicant Berhasil Diupdate!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $internship->delete();

        return redirect()->route('Admin/Article/Article')->with('success', 'Data Berhasil Dihapus!');
    }
}
