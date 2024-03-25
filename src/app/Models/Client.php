<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Client extends Authenticatable
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'middle_name',
        'last_name',
        'comment'
    ];

    public function passport()
    {
        return $this->hasOne(ClientPassport::class);
    }

    public function categories()
    {
        return $this->hasMany(ClientCategory::class);
    }
}
