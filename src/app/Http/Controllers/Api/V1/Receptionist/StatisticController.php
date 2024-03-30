<?php

namespace App\Http\Controllers\Api\V1\Receptionist;

use App\Http\Controllers\Controller;
use App\Http\Resources\StatisticResource;
use App\Services\StatisticService;

class StatisticController extends Controller
{

    public function __construct(
        private readonly StatisticService $statisticService
    ) {
    }

    public function index()
    {
        return StatisticResource::make(
            $this->statisticService->getStatistic()
        );
    }
}
