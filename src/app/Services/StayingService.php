<?php

namespace App\Services;

use App\Dto\AddStayingDto;
use App\Models\Category;
use App\Models\Room;
use App\Models\Staying;
use Exception;
use Src\App\Dto\UpdateStayingDto;

class StayingService
{
    public function getAll()
    {
        return Staying::with(['client.passport', 'room']);
    }

    public function addStaying(AddStayingDto $addStayingDto)
    {
        /** @var ?Room */
        $room = Room::query()->find($addStayingDto->roomId);
        if (!$room) {
            throw new Exception('aboba');
        }

        $room->stayings()->create([
            'client_id' => $addStayingDto->clientId,
            'check_in' => now(),
            'note' => $addStayingDto->note
        ]);
        $room->update([
            'is_busy' => true
        ]);
        return $room;
    }

    public function checkOut(UpdateStayingDto $updateStayingDto)
    {
        /** @var ?Staying */
        $staying = Staying::query()->find($updateStayingDto->stayingId);
        if (!$staying) {
            throw new Exception('aboba');
        }
        $clientCategoryIds = $staying->client()->first()->categories()->pluck('id')->toArray();
        $categoriesWithDiscount = Category::whereIn('id', $clientCategoryIds)->get();
        $totalDiscount = $categoriesWithDiscount->sum('discount.value');

        $price = $staying->room->price - $staying->room->price * ($totalDiscount / 100);
        $staying->update([
            'check_out' => now(),
            'price' => $price
        ]);
    }
}
