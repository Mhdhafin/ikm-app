<?php

namespace Database\Seeders;

use App\Models\Mata_kuliah;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MatakuliahSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Mata_kuliah::create([
            'kode_mk' => 'Matdas',
            'nama' => 'Matematika Dasar',
            'sks' => 2
        ]);
        Mata_kuliah::create([
            'kode_mk' => 'DSI',
            'nama' => 'Dasar Sistem Informasi',
            'sks' => 2
        ]);
        Mata_kuliah::create([
            'kode_mk' => 'LSD',
            'nama' => 'Dasar Logika Diskrit',
            'sks' => 2
        ]);
    }
}
