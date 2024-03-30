<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AddClientBookingRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'firstName' => 'required|string',
            'lastName' => 'required|string',
            'middleName' => 'required|string',
            'passportNumber' => 'required|numeric',
            'passportSeries' => 'required|numeric',
            'checkIn' => 'required|string',
            'checkOut' => 'required|string',
            'roomId' => 'required|numeric'
        ];
    }
}
