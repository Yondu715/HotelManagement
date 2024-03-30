<?php

namespace App\Services;

use App\DTO\LoginDTO;
use App\Exceptions\UnauthorizedException;
use App\Models\Client;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthService
{
    public function login(LoginDTO $loginDTO) {
        /** @var ?User */
        $user = User::query()->firstWhere('email', '=', $loginDTO->email);
        if (!$user || !Hash::check($loginDTO->password, $user->password)) {
            throw new UnauthorizedException();
        }
        return $user->with('role')->first();
    }

    public function loginClient(LoginDTO $loginDTO) {
        $client = Client::query()->firstWhere('email', '=', $loginDTO->email);
        if (!$client || !Hash::check($loginDTO->password, $client->password)) {
            throw new UnauthorizedException();
        }
        return $client;
    }
}