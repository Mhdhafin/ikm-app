<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pengajuan_kelas extends Model
{
    protected $table = 'pengajuan_kelas';

    protected $guarded = ['id'];

    public function mahasiswa()
    {
        return $this->belongsTo(Mahasiswa::class);
    }

    public function mataKuliah()
    {
        return $this->belongsTo(Mata_kuliah::class);
    }

    public function persetujuan()
    {
        return $this->hasOne(Persetujuan_kelas::class);
    }
}
