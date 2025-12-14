<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Mahasiswa extends Model
{
    protected $table = 'mahasiswas';

    protected $guarded = ['id'];


    public function user()
{
    return $this->belongsTo(User::class);
}

    public function pengajuan()
    {
        return $this->hasMany(Pengajuan_kelas::class);
    }
    
}
