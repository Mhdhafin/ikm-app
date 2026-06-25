<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Forum;
use App\Models\Category;

class ForumController extends Controller
{
    public function index()
    {
        $forums = Forum::with('user')
        ->withCount('replies')
        ->latest()
        ->get();
        $categories = Category::all();

    return Inertia::render('forum/index', [
        'auth'   => ['user' => auth()->user() ?? null],
        'categories' => $categories,
        'forums' => $forums,
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
