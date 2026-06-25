<?php

namespace Database\Seeders;

use App\Models\Mahasiswa;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        User::create([
            'name'     => 'Admin Sistem',
            'email'    => 'admin@kampus.ac.id',
            'password' => Hash::make('password'),
            'role'     => 'admin',
        ]);

        User::create([
            'name'     => 'IKM',
            'email'    => 'ikm@kampus.ac.id',
            'password' => Hash::make('password'),
            'role'     => 'ikm',
        ]);
        User::create([
            'name'     => 'Mahasiswa',
            'email'    => 'mahasiswa@kampus.ac.id',
            'password' => Hash::make('password'),
            'role'     => 'mahasiswa',
        ]);

        // User::create([
        //     'name' => 'Admin',
        //     'email' => 'root@example.com',
        //     'password' => bcrypt('root12345'),
        //     'role' => 'admin',
        // ]);

        // User::create([
        //     'name' => 'Mahasiswa',
        //     'email' => 'mahasiswa@example.com',
        //     'password' => bcrypt('mahasiswa12345'),
        //     'role' => 'mahasiswa',
        // ]);

        // User::create([
        //     'name' => 'Akademik',
        //     'email' => 'akademik@example.com',
        //     'password' => bcrypt('akademik12345'),
        //     'role' => 'akademik',
        // ]);
    }
}
