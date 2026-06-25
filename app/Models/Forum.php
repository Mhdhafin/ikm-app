<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Forum extends Model
{
    // protected $guarded = [
    //     'id'
    // ];

    protected $fillable = [
    'judul', 'deskripsi', 'user_id', 'category_id'
    ];

    public function user()
{
    return $this->belongsTo(User::class);
}

public function replies()
{
    return $this->hasMany(Reply::class);
}

public function category() {
    return $this->belongsTo(Category::class);
}



}
