<?php

namespace App\Exceptions;


class UnauthorizedException extends BaseException
{
    protected $message = "Неправильная почта или пароль";
    protected $code = 401;
}
