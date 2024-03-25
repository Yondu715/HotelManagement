<?php

namespace App\Dto;

use App\Http\Requests\AddStayingRequest;

class AddStayingDto
{
    public readonly int $roomId;
    public readonly int $clientId;
    public readonly string $note;

    public function __construct(
        int $roomId,
        int $clientId,
        string $note,
    ) {
        $this->roomId = $roomId;
        $this->clientId = $clientId;
        $this->note = $note;
    }

    public static function fromRequest(AddStayingRequest $addStayingRequest)
    {
        return new self(
            roomId: $addStayingRequest->roomId,
            clientId: $addStayingRequest->clientId,
            note: $addStayingRequest->note
        );
    }
}