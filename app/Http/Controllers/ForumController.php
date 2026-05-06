<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Forum;

class ForumController extends Controller
{
    public function index()
    {
        $forums = Forum::with('user')  
        ->withCount('replies')      
        ->latest()
        ->get();
        
    return Inertia::render('forum/index', [
        'auth'   => ['user' => auth()->user() ?? null],
        'forums' => $forums,
    ]);
    }

    public function show($id)
    {
     $forum = Forum::with(['user', 'replies.user'])->findOrFail($id);
        
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
        ]);

        Forum::create([
            'judul'   => $request->judul,
            'deskripsi' => $request->deskripsi,
            'user_id' => auth()->id(), 
        ]);

        return redirect()->route('forum');
    }
}
