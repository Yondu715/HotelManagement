<?php

namespace App\Http\Controllers\Api\V1\Receptionist;

use App\Http\Controllers\Controller;
use App\Http\Requests\AddClientRequest;
use App\Http\Resources\ClientResource;
use App\Services\ClientService;
use App\DTO\AddClientDto;

class ClientController extends Controller
{

    public function __construct(
        private readonly ClientService $clientService
    ) {
    }

    public function index()
    {
        return ClientResource::collection(
            $this->clientService->getAll()
        );
    }

    public function store(AddClientRequest $addClientRequest)
    {
        $addClientDto = AddClientDto::fromRequest($addClientRequest);
        $this->clientService->addClient($addClientDto);
        return response()->json()->setStatusCode(201);
    }
}
