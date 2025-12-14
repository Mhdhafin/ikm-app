<?php

namespace App\Http\Controllers;

use App\Models\Mahasiswa;
use App\Models\Mata_kuliah;
use App\Models\Pengajuan_kelas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PengajuanKelasPenggantiController extends Controller
{
/**
     * Tampilkan daftar pengajuan milik mahasiswa
     */
     public function index()
    {
        $mahasiswa = Auth::user()->mahasiswa;

        if (! $mahasiswa) {
            abort(403, 'Data mahasiswa tidak ditemukan');
        }

        $pengajuan = Pengajuan_kelas::with('mataKuliah')
            ->where('mahasiswa_id', $mahasiswa->id)
            ->latest()
            ->get();

        $mataKuliah = Mata_kuliah::all();

        return Inertia::render('mahasiswa/pengajuan/index', [
            'pengajuan'  => $pengajuan,
            'mahasiswa'  => $mahasiswa,
            'mataKuliah' => $mataKuliah,
        ]);
    }

    /**
     * Simpan pengajuan kelas baru
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'mata_kuliah' => ['required', 'string', 'max:100'],
            'kelas'       => ['required', 'string', 'max:10'],
            'alasan'      => ['required', 'string', 'max:255'],
        ]);

        Pengajuan_kelas::create([
            'mahasiswa_id' => Auth::id(),
            'mata_kuliah'  => $validated['mata_kuliah'],
            'kelas'        => $validated['kelas'],
            'alasan'       => $validated['alasan'],
            'status'       => 'pending',
        ]);

        return redirect()
            ->route('pengajuan-kelas.index')
            ->with('success', 'Pengajuan kelas berhasil dikirim');
    }

    /**
     * Update status (untuk admin / akademik)
     */
    public function updateStatus(Request $request, Pengajuan_kelas $pengajuanKelas)
    {
        $request->validate([
            'status' => ['required', 'in:pending,disetujui,ditolak'],
        ]);

        $pengajuanKelas->update([
            'status' => $request->status,
        ]);

        return back()->with('success', 'Status pengajuan diperbarui');
    }

    /**
     * Hapus pengajuan (opsional)
     */
    public function destroy(Pengajuan_kelas $pengajuanKelas)
    {
        // hanya pemilik
        if ($pengajuanKelas->mahasiswa_id !== Auth::id()) {
            abort(403);
        }

        $pengajuanKelas->delete();

        return back()->with('success', 'Pengajuan berhasil dihapus');
    }

     
}
