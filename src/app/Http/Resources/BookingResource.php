<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BookingResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'clientId' => $this->client_id,
            'roomId' => $this->room_id,
            'checkOut' => $this->check_out,
            'checkIn' => $this->check_in,
            'price' => $this->price,
            'room' => $this->whenLoaded($this->room),
            'client' => $this->whenLoaded($this->client)
        ];
    }
}
