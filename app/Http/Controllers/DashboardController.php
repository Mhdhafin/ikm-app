<?php

namespace App\Http\Controllers;

use App\Models\Jadwal_kelas;
use App\Models\Pengajuan_kelas;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
     public function index(Request $request)
    {
        // (sementara simulasi role)
        $role = $request->user()->role ?? 'mahasiswa';

        if ($role === 'admin' || $role === 'akademik') {
            return inertia('dashboard/adminDashboard', [
                'stats' => [
                    'total_pengajuan' => Pengajuan_kelas::count(),
                    'pending' => Pengajuan_kelas::where('status','pending')->count(),
                    'diterima' => Pengajuan_kelas::where('status','diterima')->count(),
                    'kelas_kosong' => Jadwal_kelas::where('status','kosong')->count(),
                ],
                'latestPengajuan' => Pengajuan_kelas::with('mahasiswa','mataKuliah')
                    ->latest()
                    ->take(5)
                    ->get(),
            ]);
        }

        // Mahasiswa
        return inertia('dashboard/mahasiswaDashboard', [
            'stats' => [
                'total_pengajuan' => Pengajuan_kelas::count(),
                'pending' => Pengajuan_kelas::where('status','pending')->count(),
                'diterima' => Pengajuan_kelas::where('status','diterima')->count(),
                'ditolak' => Pengajuan_kelas::where('status','ditolak')->count(),
            ],
            'latestPengajuan' => Pengajuan_kelas::with('mataKuliah')
                ->latest()
                ->take(5)
                ->get(),
        ]);
    }
}
