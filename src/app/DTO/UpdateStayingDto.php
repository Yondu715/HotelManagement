<?php

namespace App\DTO;

use App\Http\Requests\UpdateStayingRequest;

class UpdateStayingDto
{
    public readonly int $stayingId;

    public function __construct(
        int $stayingId,
    ) {
        $this->stayingId = $stayingId;
    }

    public static function fromRequest(UpdateStayingRequest $updateStayingRequest)
    {
        return new self(
            stayingId: $updateStayingRequest->stayingId,
        );
    }
}