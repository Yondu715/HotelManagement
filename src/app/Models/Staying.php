<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Staying extends Model
{
    use HasFactory;

    protected $guarded = false;

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function room()
    {
        return $this->belongsTo(Room::class);
    }

    public function client()
    {
        return $this->belongsTo(Client::class);
    }
}
