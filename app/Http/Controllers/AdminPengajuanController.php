<?php

namespace App\Http\Controllers;

use App\Models\Jadwal_kelas;
use App\Models\Pengajuan_kelas;
use App\Models\JadwalKelas;
use App\Models\Persetujuan_kelas;
use App\Models\PersetujuanPengajuan;
use Illuminate\Http\Request;
use DB;
use Illuminate\Support\Facades\DB as FacadesDB;
use Inertia\Inertia;

class AdminPengajuanController extends Controller
{
    /**
     * List semua pengajuan mahasiswa
     */
    public function index()
    {
        $pengajuan = Pengajuan_kelas::with('mahasiswa')
            ->latest()
            ->get();

        return Inertia::render('admin/pengajuan/index', [
            'pengajuan' => $pengajuan,
        ]);
    }

    /**
     * Approve / Reject pengajuan
     */
    public function updateStatus(Request $request, Pengajuan_kelas $pengajuan)
    {
        $validated = $request->validate([
            'status' => ['required', 'in:pending,approved,rejected'],
        ]);

        $pengajuan->update([
            'status' => $validated['status'],
        ]);

        return back()->with('success', 'Status pengajuan diperbarui');
    }
}
