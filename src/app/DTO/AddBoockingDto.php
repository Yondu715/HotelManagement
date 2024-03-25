<?php

namespace App\DTO;

use App\Http\Requests\AddBoockingRequest;

class AddBoockingDto
{
    public readonly int $roomId;
    public readonly int $clientId;
    public readonly string $checkIn;
    public readonly string $checkOut;

    public function __construct(
        int $roomId,
        int $clientId,
        string $checkIn,
        string $checkOut
    ) {
        $this->roomId = $roomId;
        $this->clientId = $clientId;
        $this->checkIn = $checkIn;
        $this->checkOut = $checkOut;
    }

    public static function fromRequest(AddBoockingRequest $addBoockingRequest)
    {
        return new self(
            roomId: $addBoockingRequest->roomId,
            clientId: $addBoockingRequest->clientId,
            checkIn: $addBoockingRequest->checkIn,
            checkOut: $addBoockingRequest->checkOut
        );
    }
}
