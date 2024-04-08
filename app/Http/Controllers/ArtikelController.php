<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Artikel;
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
        //
        $request->validate([
            'title'   => 'required',
            'author' => 'required',
            // 'image' => 'required',
            'description' => 'required',
            'tag' => 'required',
        ]);

        Artikel::create([
            'title'     => $request->title,
            'author'   => $request->author,
            // 'image'   => $request->image,
            'description'   => $request->description,
            'tag'   => $request->tag,
        ]);

        //redirect
        return redirect()->route('Admin/Article/Article')->with('success', 'Data Artikel Berhasil Ditambahkan!');
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
        //
        return Inertia::render('Admin/Article/EditArticle');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        //
        $request->validate([
            'title'   => 'required',
            'author' => 'required',
            // 'image' => 'required',
            'description' => 'required',
            'tag' => 'required',
        ]);

        Artikel::update([
            'title'     => $request->title,
            'author'   => $request->author,
            // 'image'   => $request->image,
            'description'   => $request->description,
            'tag'   => $request->tag,
        ]);

        //redirect
        return redirect()->route('Admin/Article/Article')->with('success', 'Data Artikel Berhasil Diupdate!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $artikel->delete();

        return redirect()->route('Admin/Article/Article')->with('success', 'Data Berhasil Dihapus!');
    }
}
