<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Position extends Model
{
    use HasFactory;
    protected $table = 'position';
    protected $primaryKey = 'id';
    protected $fillable = [
        'position',
        'image',
        'description',
        'is_oprec'
    ];

    public function member()
    {
        return $this->hasMany(Member::class);
    }

    public function internship()
    {
        return $this->hasOne(Internship::class);
    }
}
