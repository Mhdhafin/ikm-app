<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Mata_kuliah extends Model
{
    protected $table = 'mata_kuliahs';

    protected $guarded = ['id'];

      public function pengajuan()
    {
        return $this->hasMany(Pengajuan_kelas::class);
    }


}
