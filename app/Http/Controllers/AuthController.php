<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
   public function create()
    {
        return inertia('auth/login');
    }

    public function store(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (! Auth::attempt($credentials, true)) {
            return back()->withErrors([
                'email' => 'Email atau password salah',
            ]);
        }

        $request->session()->regenerate();

        return redirect()->intended('/');
    }

    public function register(Request $request)
    {
        // Validasi input
        $request->validate([
            'name'     => 'required|string|max:255',
            'email'    => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed', 
            'role'     => 'required|in:ikm,mahasiswa,dosen',
        ]);

        // Simpan user baru
        $user = User::create([
            'name'     => $request->name,
            'email'    => $request->email,
            'password' => Hash::make($request->password),
            'role'     => $request->role,
        ]);

        // Login otomatis setelah register
        auth()->login($user);

        return redirect()->route('forum.index')->with('success', 'Registrasi berhasil!');
    }

    public function destroy(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/login');
    }
}
