<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Artikel;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ArtikelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //get all artikel
        $artikel = Artikel::latest()->get();

        //return view
        return Inertia::render('Admin/Article/Article', [
            'artikel' => $artikel
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('Admin/Article/AddArticle');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title'   => 'required',
            'author' => 'required',
            'image' => 'image|max:2048',
            'description' => 'required',
            'tag' => '',
        ]);

        $imageName = null;
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $extension = $image->getClientOriginalName();
            $imageName = date('YmdHis') . "." . $extension;
            $image->move(storage_path('app/public/artikel/images/'), $imageName);
        }


        Artikel::create([
            'title'     => $request->title,
            'author'   => $request->author,
            'image'   => $imageName,
            'description'   => $request->description,
            'tag'   => $request->tag,
        ]);

        //redirect
        return redirect()->route('article.index')->with('success', 'Data Artikel Berhasil Ditambahkan!');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        //
        $artikel = Artikel::latest()->get($id);

        return Inertia::render('Admin/Article/ShowArticle', [
            'artikel' => $artikel
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $artikel = Artikel::where('id', $id)->first();
        return Inertia::render('Admin/Article/EditArticle', [
            'artikel' => $artikel
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required',
            'author' => 'required',
            'tag' => '',
            'image' => 'image|max:2048',
        ]);

        $artikel = Artikel::find($request->id);

        if (!$artikel) {
            return redirect()->route('article.index')->with('error', 'Artikel not found.');
        }

        $artikel->title = $request->title;
        $artikel->author = $request->author;
        $artikel->tag = $request->tag;


        if ($request->hasFile('image')) {
            $oldImage = $artikel->image;


            if ($oldImage && Storage::exists('public/artikel/images/' . $oldImage)) {
                Storage::delete('public/artikel/images/' . $oldImage);
            }

            $image = $request->file('image');
            $extension = $image->getClientOriginalExtension();
            $imageName = date('YmdHis') . "." . $extension;
            $image->storeAs('public/artikel/images', $imageName);
            $artikel->image = $imageName;
        }

        $artikel->save();

        return redirect()->route('article.index')->with('success', 'Artikel updated successfully.');
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {

        $artikel = Artikel::find($id);

        if (!$artikel) {
            return redirect()->route('article.index')->with('error', 'Artikel not found.');
        }

        $imagePath = 'public/artikel/images/' . $artikel->image;
        if ($artikel->image && Storage::exists($imagePath)) {
            Storage::delete($imagePath);
        }

        $artikel->delete();

        return redirect()->route('article.index')->with('success', 'Artikel deleted successfully.');
    }
}
