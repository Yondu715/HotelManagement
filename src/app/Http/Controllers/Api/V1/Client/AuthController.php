<?php

namespace App\Http\Controllers\Api\V1\Client;

use App\DTO\LoginDto;
use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Resources\ClientResource;
use App\Services\AuthService;

class AuthController extends Controller
{
    public function __construct(
        private readonly AuthService $authService
    ) {
    }

    public function login(LoginRequest $loginRequest)
    {
        $loginDto = LoginDto::fromRequest($loginRequest);
        $client = $this->authService->loginClient($loginDto);
        $token = $client->createToken('auth')->plainTextToken;
        return response()->json([
            'token' => $token,
            'user' => ClientResource::make($client)
        ]);
    }
}
