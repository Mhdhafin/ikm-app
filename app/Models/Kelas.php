<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Kelas extends Model
{
    protected $table = 'kelas';

    protected $guarded = ['id'];

    public function jadwal()
    {
        return $this->hasMany(Jadwal_kelas::class);
    }

    public function pertsetujuan()
    {
        return $this->hasMany(Persetujuan_kelas::class);
    }
}
