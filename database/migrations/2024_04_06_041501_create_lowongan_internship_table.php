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
        Schema::create('lowongan_internship', function (Blueprint $table) {
            $table->id();
            $table->string('nama_lowongan', 100);
            $table->text('deskripsi');
            $table->enum('area', ['onsite', 'remote', 'hybrid']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lowongan_internship');
    }
};
