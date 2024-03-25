<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClientCategory extends Model
{
    use HasFactory;

    protected $guarded = false;

    protected $table = 'client_category';

    public function category() {
        return  $this->belongsTo(Category::class);
    }
}
