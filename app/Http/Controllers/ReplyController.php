<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reply;

class ReplyController extends Controller
{
    public function store(Request $request, $forumId)
    {
        
    $request->validate([
        'isi' => 'required|string',
        'file' => 'nullable|file|mimes:jpg,jpeg,png,pdf,doc,docx|max:2048',
    ]);

    $path = null;
    if ($request->hasFile('file')) {
        $path = $request->file('file')->store('replies', 'public');
    }

    Reply::create([
        'forum_id' => $forumId,
        'user_id'  => auth()->id(),
        'isi'      => $request->isi,
        'attachment' => $path,
    ]);

    return redirect()->route('forum.show', $forumId)->with('success', 'Balasan berhasil ditambahkan!');

    }
}
