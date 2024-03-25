<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    use HasFactory;

    protected $guarded = false;

    public function stayings()
    {
        return $this->hasMany(Staying::class);
    }

    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }
}
