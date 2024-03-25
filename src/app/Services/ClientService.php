<?php

namespace App\Services;

use App\Models\Client;
use App\DTO\AddClientDTO;

class ClientService
{
    public function getAll()
    {
        return  Client::query()->with('passport')->get();
    }

    public function addClient(AddClientDTO $addClientDTO) {
        /** @var Client */
        $client = Client::query()->create([
            'first_name' => $addClientDTO->firstName,
            'last_name' => $addClientDTO->lastName,
            'middle_name' => $addClientDTO->middleName,
            'comment' => $addClientDTO->comment
        ]);
        $client->passport()->create([
            'series' => $addClientDTO->series,
            'number' => $addClientDTO->number
        ]);
        $client->categories()->create([
            'category_id' => 1
        ]);
        return $client;
    }
}
