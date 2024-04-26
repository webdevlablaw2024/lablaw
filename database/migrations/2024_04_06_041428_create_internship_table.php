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
        Schema::create('internship', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('lowongan_internship_id');
            $table->string('nama', 100);
            $table->string('alamat', 100);
            $table->string('no_telepon', 15);
            $table->date('tgl_lahir');
            $table->string('portofolio', 100);
            $table->string('cv', 100);
            $table->dateTime('created_at')->useCurrent();
            $table->dateTime('updated_at')->nullable()->default(DB::raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('internship');
    }
};
