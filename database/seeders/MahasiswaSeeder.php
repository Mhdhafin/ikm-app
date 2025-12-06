<?php

namespace Database\Seeders;

use App\Models\Mahasiswa;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MahasiswaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        
        Mahasiswa::insert([
            ['nim' => '1325001', 'nama' => 'Raihan Khairul Anam', 'prodi' => 'SIIO', 'semester' => 1],
            ['nim' => '1325002', 'nama' => 'Rafida Izza Naila', 'prodi' => 'SIIO', 'semester' => 1],
            ['nim' => '1325003', 'nama' => 'Felicia Cahaya Zefanya Wils', 'prodi' => 'SIIO', 'semester' => 1],
            ['nim' => '1325004', 'nama' => 'Dannyel Haposan Sinaga', 'prodi' => 'SIIO', 'semester' => 1],
            ['nim' => '1325005', 'nama' => 'Nababan, Andreas Arghado', 'prodi' => 'SIIO', 'semester' => 1],
            ['nim' => '1325006', 'nama' => 'Fauzan Amri Pinem', 'prodi' => 'SIIO', 'semester' => 1],
            ['nim' => '1325007', 'nama' => 'Joan Setyo Nugroho Farian', 'prodi' => 'SIIO', 'semester' => 1],
            ['nim' => '1325008', 'nama' => 'Kalila Thara Maysa', 'prodi' => 'SIIO', 'semester' => 1],
            ['nim' => '1325009', 'nama' => 'Syauqi Hanif Hamidi', 'prodi' => 'SIIO', 'semester' => 1],
            ['nim' => '1325010', 'nama' => 'Christi Sulistiawaty Sinaga', 'prodi' => 'SIIO', 'semester' => 1],
            ['nim' => '1325011', 'nama' => 'Fauzan Aditya Putra Yuhendar', 'prodi' => 'SIIO', 'semester' => 1],
            ['nim' => '1325012', 'nama' => 'Gifari Zidane Yofien', 'prodi' => 'SIIO', 'semester' => 1],
            ['nim' => '1325013', 'nama' => 'Najwan Raihan Azhari', 'prodi' => 'SIIO', 'semester' => 1],
            ['nim' => '1325014', 'nama' => 'Farrel Atha Tsani', 'prodi' => 'SIIO', 'semester' => 1],
            ['nim' => '1325015', 'nama' => 'Muhammad Ridwan', 'prodi' => 'SIIO', 'semester' => 1],
            ['nim' => '1325016', 'nama' => 'Ruby Hardianto', 'prodi' => 'SIIO', 'semester' => 1],
            ['nim' => '1325017', 'nama' => 'Sauzan Dewi Kirani', 'prodi' => 'SIIO', 'semester' => 1],
            ['nim' => '1325018', 'nama' => 'Kenzie Radithya Aryadi', 'prodi' => 'SIIO', 'semester' => 1],
            ['nim' => '1325019', 'nama' => 'Yulia Rahmawati', 'prodi' => 'SIIO', 'semester' => 1],
            ['nim' => '1325020', 'nama' => 'Muhammad Rasyid Muluk', 'prodi' => 'SIIO', 'semester' => 1],
            ['nim' => '1325021', 'nama' => 'Bimo Pandu Wiyono Singgih', 'prodi' => 'SIIO', 'semester' => 1],
            ['nim' => '1325022', 'nama' => 'Aufa Ibadurohman', 'prodi' => 'SIIO', 'semester' => 1],
            ['nim' => '1325023', 'nama' => 'Naufal Adani Prasetya', 'prodi' => 'SIIO', 'semester' => 1],
            ['nim' => '1325024', 'nama' => 'Mochammad Shaldan Fadillah', 'prodi' => 'SIIO', 'semester' => 1],
            ['nim' => '1325025', 'nama' => 'Rangga Prayuda Ramadhan', 'prodi' => 'SIIO', 'semester' => 1],
            ['nim' => '1325026', 'nama' => 'Muhammad Dhafin Haron', 'prodi' => 'SIIO', 'semester' => 1],
            ['nim' => '1325027', 'nama' => 'Raya Nur Aisah', 'prodi' => 'SIIO', 'semester' => 1],
            ['nim' => '1325028', 'nama' => 'Sabrina Yuliani Alkhawarizmi', 'prodi' => 'SIIO', 'semester' => 1],
            ['nim' => '1325029', 'nama' => 'William Otniel Hosea Siahaan', 'prodi' => 'SIIO', 'semester' => 1],
            ['nim' => '1325031', 'nama' => 'Alya Putri Khoirunnisa', 'prodi' => 'SIIO', 'semester' => 1],
        ]);
    }
}
