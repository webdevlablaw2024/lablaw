<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Artikel extends Model
{
    use HasFactory;
    protected $table = 'artikel'; 
    protected $primaryKey = 'id'; 
    protected $fillable = ['title', 'author', 'image', 'description', 'tag']; 

    public function user() {
        return $this->belongsTo(User::class);
    }
}
