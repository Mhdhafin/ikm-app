<?php

namespace Database\Seeders;

use App\Models\Kelas;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class KelasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         Kelas::insert([
            ['kode_kelas' => 'SA01', 'kapasitas' => 30],
            ['kode_kelas' => 'SA02', 'kapasitas' => 31],
            ['kode_kelas' => 'SA03', 'kapasitas' => 31],
        ]);
    }
}
