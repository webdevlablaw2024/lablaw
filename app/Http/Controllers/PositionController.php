<?php

namespace App\Http\Controllers;

use App\Models\Position;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
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
        $request->validate([
            'position'       => 'required',
            'image'          => 'image|max:2048',
            'description'    => 'required',
            'area'           => 'required',
        ]);

        $imageName = null;
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $extension = $image->getClientOriginalName();
            $imageName = date('YmdHis') . "." . $extension;
            $image->move(storage_path('app/public/position/images/'), $imageName);
        }


        Position::create([
            'position'       => $request->position,
            'image'          => $imageName,
            'description'    => $request->description,
            'area'           => $request->area,
        ]);

        //redirect
        return redirect()->route('position.index')->with('success', 'Data Position Berhasil Ditambahkan!');
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
        $position = Position::where('id', $id)->first();
        return Inertia::render('Admin/Internship/Position/EditPosition', [
            'position' => $position
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'position'       => 'required',
            'image'          => 'image|max:2048',
            'description'    => 'required',
            'area'           => 'required',
        ]);

        $position = Position::find($request->id);

        if (!$position) {
            return redirect()->route('position.index')->with('error', 'Position not found.');
        }

        $position->position = $request->position;
        $position->description = $request->description;


        if ($request->hasFile('image')) {
            $oldImage = $position->image;


            if ($oldImage && Storage::exists('public/position/images/' . $oldImage)) {
                Storage::delete('public/position/images/' . $oldImage);
            }

            $image = $request->file('image');
            $extension = $image->getClientOriginalExtension();
            $imageName = date('YmdHis') . "." . $extension;
            $image->storeAs('public/position/images', $imageName);
            $position->image = $imageName;
        }

        $position->save();

        return redirect()->route('position.index')->with('success', 'Position updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {

        $position = Position::find($id);

        if (!$position) {
            return redirect()->route('position.index')->with('error', 'Position not found.');
        }

        $imagePath = 'public/position/images/' . $position->image;
        if ($position->image && Storage::exists($imagePath)) {
            Storage::delete($imagePath);
        }

        $position->delete();


        return redirect()->route('position.index')->with('success', 'Position deleted successfully.');
    }

    public function changeStatus($id)
    {
        $position = Position::find($id);

        if ($position) {
            $position->is_oprec = !$position->is_oprec;
            $position->update();
        }
        return redirect()->back();
    }
}
