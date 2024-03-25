<?php

namespace App\DTO;

use App\Http\Requests\GetRoomsRequest;

class GetRoomsDto
{
    public readonly ?int $capacity;
    public readonly ?string $comfortLevel;
    public readonly ?string $checkIn;
    public readonly ?string $checkOut;

    public function __construct(
        ?int $capacity,
        ?string $comfortLevel,
        ?string $checkIn,
        ?string $checkOut
    ) {
        $this->capacity = $capacity;
        $this->comfortLevel = $comfortLevel;
        $this->checkIn = $checkIn ? $checkIn : now();
        $this->checkOut = $this->getCheckOut($checkIn, $checkOut);
    }

    public static function fromRequest(GetRoomsRequest $getRoomsRequest)
    {
        return new self(
            capacity: $getRoomsRequest->capacity,
            comfortLevel: $getRoomsRequest->comfortLevel,
            checkIn: $getRoomsRequest->checkIn,
            checkOut: $getRoomsRequest->checkOut
        );
    }

    private function getCheckOut(?string $checkIn, ?string $checkOut)
    {
        if ($checkIn && $checkOut) {
            return $checkOut;
        }
        if ($checkIn && !$checkOut) {
            return $checkIn;
        }
        return now();
    }
}
