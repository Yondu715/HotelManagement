<?php

namespace App\Http\Controllers\Api\V1\Client;

use App\DTO\GetRoomsDto;
use App\Http\Controllers\Controller;
use App\Http\Requests\GetRoomsRequest;
use App\Http\Resources\RoomResource;
use App\Services\RoomService;

class RoomController extends Controller
{

    public function __construct(
        private readonly RoomService $roomService
    ) {
    }

    public function getAvailableRooms(GetRoomsRequest $getRoomsRequest)
    {
        $getRoomsDto = GetRoomsDto::fromRequest($getRoomsRequest);
        return RoomResource::collection(
            $this->roomService->getAvailableRooms($getRoomsDto)
        );
    }
}
