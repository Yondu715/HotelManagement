<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AddClientRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'firstName' => 'required|string|max:255',
            'middleName' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'comment' => 'required|string|max:255',
            'number' => 'required|numeric',
            'series' => 'required|numeric',
        ];
    }
}
