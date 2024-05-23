<?php

namespace App\Http\Controllers;

use App\Models\Artikel;
use Illuminate\Http\Request;
use App\Models\Internship;
use App\Models\Position;
use Inertia\Inertia;

class InternshipController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //get all internship
        $internship = Internship::with('position')->latest()->get();

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
            'position_id'     => 'required',
            'name'            => 'required',
            'phone'           => 'required',
            'email'           => 'required',
            'institution'     => 'required',
            'major'           => 'required',
            'college_year'    => 'required',
            'reason'          => 'required',
            'summary'         => 'requiered',
            'cv'              => 'required',
        ]);

        Artikel::create([
            'position_id'    => $request->position_id,
            'name'           => $request->name,
            'phone'          => $request->phone,
            'email'          => $request->email,
            'institution'    => $request->institution,
            'major'          => $request->major,
            'college_year'   => $request->college_year,
            'reason'         => $request->reason,
            'summary'        => $request->summary,
            'cv'             => $request->cv,
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
        $internship = Internship::with('position')->find($id);

        return Inertia::render('Artikel/Show', [
            'internship' => $internship
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
    // public function update(Request $request, $id)
    // {
    //     //
    //     $request->validate([
    //         'position_id'     => 'required',
    //         'name'            => 'required',
    //         'phone'           => 'required',
    //         'email'           => 'required',
    //         'institution'     => 'required',
    //         'major'           => 'required',
    //         'college_year'    => 'required',
    //         'reason'          => 'required',
    //         'summary'         => 'requiered',
    //         'cv'              => 'required',
    //     ]);

    //     Artikel::update([
    //         'position_id'    => $request->position_id,
    //         'name'           => $request->name,
    //         'phone'          => $request->phone,
    //         'email'          => $request->email,
    //         'institution'    => $request->institution,
    //         'major'          => $request->major,
    //         'college_year'   => $request->college_year,
    //         'reason'         => $request->reason,
    //         'summary'        => $request->summary,
    //         'cv'             => $request->cv,
    //     ]);

    //     return redirect()->route('Admin/Internship/Applicant')->with('success', 'Data Applicant Berhasil Diupdate!');
    // }

    /**
     * Remove the specified resource from storage.
     */
    // public function destroy(string $id)
    // {
    //     $internshi = Artikel::find($id);
    //     $internship->delete();

    //     return redirect()->route('Admin/Article/Article')->with('success', 'Data Berhasil Dihapus!');
    // }
}
