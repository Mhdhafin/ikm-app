<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Consultation extends Model
{
    protected $guarded = [
        'id'
    ];

    public function ikm()
{
    return $this->belongsTo(User::class, 'ikm_id');
}

public function mahasiswa()
{
    return $this->belongsTo(User::class, 'mahasiswa_id');
}

public function dosen()
{
    return $this->belongsTo(User::class, 'dosen_id');
}

}
