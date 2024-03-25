<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Client extends Authenticatable
{
    use HasFactory;

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'created_at',
        'updated_at',
    ];

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
