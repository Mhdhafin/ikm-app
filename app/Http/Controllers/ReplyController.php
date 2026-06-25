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
        'file' => 'nullable|image|max:5120', // max 5MB
    ]);

    $reply = Reply::create([
        'isi' => $request->isi,
        'user_id' => auth()->id(),
        'forum_id' => $forumId,
    ]);

    if ($request->hasFile('file')) {
        $path = $request->file('file')->store('attachments', 'public');
        $reply->attachment = $path;
        $reply->save();
    }

    return redirect()->route('forum.show', $forumId)->with('success', 'Balasan berhasil ditambahkan!');

    }
}
