<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Device extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'light_level',
        'warmth',
        'status'
    ];

    public function schedule()
    {
        return $this->belongsTo(Schedule::class);
    }
}
