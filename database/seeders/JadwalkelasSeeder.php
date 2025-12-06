<?php

namespace Database\Seeders;

use App\Models\Jadwal_kelas;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JadwalkelasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Jadwal_kelas::insert([
            ['kelas_id'=>1,'hari'=>'Senin','jam_mulai'=>'08:00','jam_selesai'=>'09:40','status'=>'terpakai'],
            ['kelas_id'=>2,'hari'=>'Jumat','jam_mulai'=>'11:00','jam_selesai'=>'12:40','status'=>'terpakai'],
            ['kelas_id'=>3,'hari'=>'Selasa','jam_mulai'=>'08:00','jam_selesai'=>'10:00','status'=>'terpakai'],
        ]);
    }
}
