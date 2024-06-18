<?php

use App\Models\Position;
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
            $table->foreignIdFor(Position::class)->constrained('position')->cascadeOnDelete();
            $table->string('name');
            $table->string('phone');
            $table->string('email');
            $table->string('institution');
            $table->string('major');
            $table->year('college_year');
            $table->string('reason');
            $table->longText('summary');
            $table->string('cv');
            $table->string('portofolio');
            $table->timestamps();
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
