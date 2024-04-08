<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
    use HasFactory;
    protected $table = 'chat'; 
    protected $primaryKey = 'id'; 
    protected $fillable = ['users_id', 'sender', 'message']; 

    public function user() {
        return $this->belongsTo(User::class);
    }
}
