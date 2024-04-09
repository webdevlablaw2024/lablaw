<?php

namespace App\Http\Controllers;

use App\Models\Member;
use App\Models\Position;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class MemberController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //get all member
        $member = Member::with("position")->latest()->get();

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
        $positions = Position::get();
        return Inertia::render('Admin/Member/AddMember', ['positions' => $positions]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'   => 'required',
            'gender' => 'required',
            'image' => 'image|max:2048',
            'position_id' => 'required|exists:position,id',
        ]);

        $imageName = null;
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $extension = $image->getClientOriginalName();
            $imageName = date('YmdHis') . "." . $extension;
            $image->move(storage_path('app/public/member/images/'), $imageName);
        }


        Member::create([
            'name'     => $request->name,
            'gender'   => $request->gender,
            'image'   => $imageName,
            'position_id' => $request->position_id,

        ]);

        //redirect
        return redirect()->route('member.index')->with('success', 'Data Member Berhasil Ditambahkan!');
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
        $positions = Position::get();
        $member = Member::where('id', $id)->first();
        return Inertia::render('Admin/Member/EditMember', [
            'positions' => $positions,
            'member' => $member,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'name'   => 'required',
            'gender' => 'required',
            'image' => 'image|max:2048',
            'position_id' => 'required|exists:position,id',
        ]);

        $member = Member::find($request->id);

        if (!$member) {
            return redirect()->route('member.index')->with('error', 'member not found.');
        }

        $member->name = $request->name;
        $member->gender = $request->gender;
        $member->position_id = $request->position_id;


        if ($request->hasFile('image')) {
            $oldImage = $member->image;


            if ($oldImage && Storage::exists('public/member/images/' . $oldImage)) {
                Storage::delete('public/member/images/' . $oldImage);
            }

            $image = $request->file('image');
            $extension = $image->getClientOriginalExtension();
            $imageName = date('YmdHis') . "." . $extension;
            $image->storeAs('public/member/images', $imageName);
            $member->image = $imageName;
        }

        $member->save();

        return redirect()->route('member.index')->with('success', 'Member updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {

        $member = Member::find($id);

        if (!$member) {
            return redirect()->route('member.index')->with('error', 'Member not found.');
        }

        $imagePath = 'public/member/images/' . $member->image;
        if ($member->image && Storage::exists($imagePath)) {
            Storage::delete($imagePath);
        }

        $member->delete();

    
        return redirect()->route('member.index')->with('success', 'Member deleted successfully.');
    }
}
