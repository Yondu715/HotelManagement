<?php

namespace App\Services;

use App\Dto\AddStayingDto;
use App\Models\Category;
use App\Models\Room;
use App\Models\Staying;
use Exception;
use App\DTO\UpdateStayingDto;
use App\Models\Client;
use Carbon\Carbon;

class StayingService
{
    public function getAll()
    {
        return Staying::with(['client.passport', 'room'])->get();
    }

    public function addStaying(AddStayingDto $addStayingDto)
    {
        /** @var ?Room */
        $room = Room::query()->find($addStayingDto->roomId);
        if (!$room) {
            throw new Exception('aboba');
        }

        $staying = $room->stayings()->create([
            'client_id' => $addStayingDto->clientId,
            'check_in' => now(),
            'note' => $addStayingDto->note
        ]);
        return $staying;
    }

    public function checkOut(UpdateStayingDto $updateStayingDto)
    {
        /** @var ?Staying */
        $staying = Staying::query()->find($updateStayingDto->stayingId);
        if (!$staying) {
            throw new Exception('aboba');
        }

        $client = Client::query()->find($staying->client_id);
        if (!$client) {
            throw new Exception('aboba');
        }

        $checkIn = Carbon::parse($staying->check_in);
        $checkOut = Carbon::parse(now());
        $diffDays = $checkOut->diffInDays($checkIn);

        $totalDiscount = $client->categories()->get()->sum('category.discount.value');
        $price = $staying->room->price - ($staying->room->price * $diffDays * $totalDiscount / 100);

        $staying->update([
            'check_out' => now(),
            'price' => $price
        ]);
    }
}
