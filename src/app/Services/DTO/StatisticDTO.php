<?php

namespace App\Services\DTO;

use Illuminate\Database\Eloquent\Collection;

class StatisticDTO
{
    public readonly int $clientsCount;
    public readonly Collection $bookingStatistic;
    public readonly Collection $stayingStatistic;

    public function __construct(
        int $clientsCount,
        Collection $bookingStatistic,
        Collection $stayingStatistic,
    ) {
        $this->clientsCount = $clientsCount;
        $this->bookingStatistic = $bookingStatistic;
        $this->stayingStatistic = $stayingStatistic;
    }
}