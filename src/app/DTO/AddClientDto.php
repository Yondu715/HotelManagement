<?php

namespace App\DTO;

use App\Http\Requests\AddClientRequest;

class AddClientDto
{
    public readonly string $firstName;
    public readonly string $middleName;
    public readonly string $lastName;
    public readonly int $series;
    public readonly int $number;
    public readonly string $comment;

    public function __construct(
        int $series,
        int $number,
        string $firstName,
        string $middleName,
        string $lastName,
        string $comment
    ) {
        $this->series = $series;
        $this->number = $number;
        $this->firstName = $firstName;
        $this->middleName = $middleName;
        $this->lastName = $lastName;
        $this->comment = $comment;
    }

    public static function fromRequest(AddClientRequest $addClientRequest)
    {
        return new self(
            series: $addClientRequest->series,
            number: $addClientRequest->number,
            lastName: $addClientRequest->lastName,
            firstName: $addClientRequest->firstName,
            middleName: $addClientRequest->middleName,
            comment: $addClientRequest->comment
        );
    }
}
