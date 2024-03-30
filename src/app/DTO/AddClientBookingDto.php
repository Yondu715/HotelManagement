<?php

namespace App\DTO;

use App\Http\Requests\AddClientBookingRequest;

class AddClientBookingDto
{
    public readonly string $lastName;
    public readonly string $middleName;
    public readonly string $firstName;
    public readonly string $checkIn;
    public readonly string $checkOut;
    public readonly int $passportNumber;
    public readonly int $passportSeries;
    public readonly int $roomId;

    public function __construct(
        string $lastName,
        string $middleName,
        string $firstName,
        string $checkIn,
        string $checkOut,
        int $passportNumber,
        int $passportSeries,
        int $roomId
    ) {
        $this->lastName = $lastName;
        $this->middleName = $middleName;
        $this->firstName = $firstName;
        $this->checkIn = $checkIn;
        $this->checkOut = $checkOut;
        $this->passportNumber = $passportNumber;
        $this->passportSeries = $passportSeries;
        $this->roomId = $roomId;
    }

    public static function fromRequest(AddClientBookingRequest $addClientBookingRequest)
    {
        return new self(
            lastName: $addClientBookingRequest->lastName,
            middleName: $addClientBookingRequest->middleName,
            firstName: $addClientBookingRequest->firstName,
            checkIn: $addClientBookingRequest->checkIn,
            checkOut: $addClientBookingRequest->checkOut,
            passportNumber: $addClientBookingRequest->passportNumber,
            passportSeries: $addClientBookingRequest->passportSeries,
            roomId: $addClientBookingRequest->roomId
        );
    }
}
