<?php

namespace App\DTO;

use App\Http\Requests\LoginRequest;

class LoginDto
{
    public readonly string $email;
    public readonly string $password;

    public function __construct(
        string $email,
        string $password,
    ) {
        $this->email = $email;
        $this->password = $password;
    }

    public static function fromRequest(LoginRequest $loginRequest)
    {
        return new self(
            email: $loginRequest->email,
            password: $loginRequest->password
        );
    }
}