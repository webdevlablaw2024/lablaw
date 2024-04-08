<?php

namespace App\Http\Controllers;

use App\Models\Member;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MemberController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //get all member
        $member = Member::latest()->get();

        //return view
        return Inertia::render('Admin/Member/Member', [
            'member' => $member
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Member/AddMember');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'name'   => 'required',
            'gender' => 'required',
            // 'image' => 'required',
            'position' => 'required',
        ]);

        Member::create([
            'name'     => $request->name,
            'gender'   => $request->gender,
            // 'image'   => $request->image,
            'position'   => $request->position,
        ]);

        //redirect
        return redirect()->route('Admin/Member/Member')->with('success', 'Data Member Berhasil Ditambahkan!');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        //
        $member = Member::latest()->get($id);

        return Inertia::render('Admin/Member/ShowMember', [
            'member' => $member
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        //
        return Inertia::render('Admin/Member/EditMember');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        //
        $request->validate([
            'name'   => 'required',
            'gender' => 'required',
            // 'image' => 'required',
            'position' => 'required',
        ]);

        Member::update([
            'name'     => $request->name,
            'gender'   => $request->gender,
            // 'image'   => $request->image,
            'position'   => $request->position,
        ]);

        //redirect
        return redirect()->route('Admin/Member/Member')->with('success', 'Data Member Berhasil Diupdate!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $member->delete();

        return redirect()->route('Admin/Member/Member')->with('success', 'Data Berhasil Dihapus!');
    }
}
