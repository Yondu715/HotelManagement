<?php

namespace App\Exceptions;

use Exception;

abstract class BaseException extends Exception
{
    public function render()
    {
        return response()->json([
            'message' => $this->message
        ], $this->code);
    }
}
