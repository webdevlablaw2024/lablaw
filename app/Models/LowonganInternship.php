<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LowonganInternship extends Model
{
    use HasFactory;
    protected $table = 'lowongan_internship'; 
    protected $primaryKey = 'id'; 
    protected $fillable = ['nama_lowongan', 'deskripsi', 'area']; 

    public function internship() {
        return $this->hasOne(Internship::class);
    }
}
