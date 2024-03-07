<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Internship extends Model
{
    use HasFactory;
    protected $table = 'internship'; 
    protected $primaryKey = 'id'; 
    protected $fillable = ['lowongan_internship_id', 'nama', 'alamat', 'no_telepon', 'tgl_lahir', 'portofolio', 'cv']; 
}
