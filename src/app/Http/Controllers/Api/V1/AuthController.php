<?php

namespace App\Http\Controllers\Api\V1;

use App\DTO\LoginDto;
use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Resources\UserResource;
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
        $user = $this->authService->login($loginDto);
        $token = $user->createToken('auth')->plainTextToken;
        return response()->json([
            'token' => $token,
            'user' => UserResource::make($user)
        ]);
    }
}
