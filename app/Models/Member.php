<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    use HasFactory;
    protected $table = 'member'; 
    protected $primaryKey = 'id'; 
    protected $fillable = [
        'position_id',
        'name', 
        'gender', 
        'image'
    ];


    public function position()
    {
        return $this->belongsTo(Position::class);
    }
}
