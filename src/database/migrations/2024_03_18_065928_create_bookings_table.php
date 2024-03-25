<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('client_id');
            $table->unsignedBigInteger('room_id');
            $table->timestamp('check_in');
            $table->timestamp('check_out');
            $table->double('price')->nullable();
            $table->timestamps();

            $table->foreign('client_id')->references('id')->on('clients')->cascadeOnUpdate();
            $table->foreign('room_id')->references('id')->on('rooms')->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};
