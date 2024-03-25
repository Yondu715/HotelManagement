<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    public function clients() {
        return $this->belongsToMany(Client::class, 'client_category', 'client_id');
    }

    public function discount() {
        return $this->hasOne(DiscountPolicy::class);
    }
}