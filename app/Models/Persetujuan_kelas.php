<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Persetujuan_kelas extends Model
{
    protected $table = 'persetujuan_kelas';

    protected $guarded = ['id'];

     public function pengajuan()
    {
        return $this->belongsTo(Pengajuan_kelas::class);
    }

    public function kelas()
    {
        return $this->belongsTo(Kelas::class);
    }

    public function jadwal()
    {
        return $this->belongsTo(Jadwal_kelas::class, 'jadwal_kelas_id');
    }
}
