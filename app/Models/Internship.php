<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Internship extends Model
{
    use HasFactory;
    protected $table = 'internship'; 
    protected $primaryKey = 'id'; 
    protected $fillable = [
        'position_id', 
        'name', 
        'phone',
        'email', 
        'institution',
        'major',
        'colleger_year',
        'reason',
        'summary',
        'cv'
    ]; 

    public function position() {
        return $this->belongsTo(Position::class);
    }
}
