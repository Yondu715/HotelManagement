<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClientPassport extends Model
{
    use HasFactory;

    protected $fillable = [
        'series',
        'number'
    ];

    public function client()
    {
        return $this->hasOne(Client::class);
    }
}
