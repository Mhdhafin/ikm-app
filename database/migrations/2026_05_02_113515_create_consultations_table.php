<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('consultations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('ikm_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('mahasiswa_id')->nullable()->constrained('users')->onDelete('cascade');
            $table->foreignId('dosen_id')->nullable()->constrained('users')->onDelete('cascade');
            $table->text('masalah');
            $table->text('solusi')->nullable();
            $table->enum('status', ['menunggu', 'diskusi', 'selesai'])->default('menunggu');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('consultations');
    }
};
