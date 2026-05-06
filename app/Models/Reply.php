<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reply extends Model
{
    protected $fillable = ['forum_id', 'user_id', 'isi', 'attachment'];

    public function forum()
{
    return $this->belongsTo(Forum::class);
}

public function user()
{
    return $this->belongsTo(User::class);
}

}
