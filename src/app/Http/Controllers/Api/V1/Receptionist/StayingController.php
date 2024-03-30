<?php

namespace App\Http\Controllers\Api\V1\Receptionist;

use App\DTO\AddStayingDto;
use App\Http\Controllers\Controller;
use App\Http\Requests\AddStayingRequest;
use App\Http\Requests\UpdateStayingRequest;
use App\Http\Resources\StayingResource;
use App\Services\StayingService;
use App\DTO\UpdateStayingDto;

class StayingController extends Controller
{

    public function __construct(
        public readonly StayingService $stayingService
    ) {
    }

    public function index()
    {
        return StayingResource::collection(
            $this->stayingService->getAll()
        );
    }

    public function store(AddStayingRequest $addStayingRequest)
    {
        $addStayingDto = AddStayingDto::fromRequest($addStayingRequest);
        $this->stayingService->addStaying($addStayingDto);
        return response()->json()->setStatusCode(201);
    }

    public function update(UpdateStayingRequest $updateStayingRequest)
    {
        $updateStayingDto = UpdateStayingDto::fromRequest($updateStayingRequest);
        $this->stayingService->checkOut($updateStayingDto);
        return response()->noContent();
    }
}
