<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StayingResource extends JsonResource
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
            'checkIn' => $this->check_in,
            'checkOut' => $this->check_out,
            'price' => $this->price,
            'room' => RoomResource::make(
                $this->whenLoaded('room')
            ),
            'client' => ClientResource::make(
                $this->whenLoaded('client')
            )
        ];
    }
}
