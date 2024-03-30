<?php

namespace App\Services;

use App\Models\Booking;
use App\Models\Client;
use App\Models\Staying;
use App\Services\DTO\StatisticDTO;

class StatisticService
{
    public function getStatistic()
    {
        $clientsCount = Client::query()->count();
        $monthlyStayingsTotalPrices = Staying::selectRaw('DATE_FORMAT(check_out, "%Y-%m") AS month, SUM(price) AS total_price')
            ->whereNotNull('price')
            ->groupBy('month')
            ->get();
        $monthlyBookingTotalPrices = Booking::selectRaw('DATE_FORMAT(check_out, "%Y-%m") AS month, SUM(price) AS total_price')
            ->groupBy('month')
            ->get();
        return new StatisticDTO(
            $clientsCount,
            $monthlyBookingTotalPrices,
            $monthlyStayingsTotalPrices
        );
    }
}
