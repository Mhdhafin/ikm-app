<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Forum;
use App\Models\Category;
use Illuminate\Support\Facades\Storage;

class ForumController extends Controller
{
    public function index()
    {
        $forums = Forum::with('user')
        ->withCount('replies')
        ->latest()
        ->get();
        $logoHalal = asset('storage/halal/halal-logo.png');
        $logoNib   = asset('storage/nib/nib-logo.png');
        $logoIkm  = asset('storage/ikm/logo-hero.png');


        $categories = Category::all();

        // dd($logoHero);

    return Inertia::render('forum/index', [
        'auth'   => ['user' => auth()->user() ?? null],
        'categories' => $categories,
        'forums' => $forums,
        'logoHalal' => $logoHalal,
        'logoNib' => $logoNib,
        'logoIkm' => $logoIkm,
    ]);
    }

    public function show($id)
    {
     $forum = Forum::with(['user', 'replies.user', 'category'])->findOrFail($id);

    //  dd($forum->category->name);

    return Inertia::render('forum/show', [
        'auth'   => ['user' => auth()->user() ?? null],
        'forum' => $forum,
    ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'judul'   => 'required|string|max:100',
            'deskripsi' => 'required|string|max:1000',
            'category_id' => 'required|exists:categories,id',
        ]);

        Forum::create([
            'judul'   => $request->judul,
            'deskripsi' => $request->deskripsi,
            'user_id' => auth()->id(),
            'category_id' => $request->category_id,
        ]);

        return redirect()->route('forum');
    }
}
