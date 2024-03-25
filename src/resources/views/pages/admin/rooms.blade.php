@extends('layouts.admin')
@section('content')
    <x-sidebar.sidebar />
    <div class="column justify-content-center bg-white w-100 h-100 rounded pe-2 ps-2 pt-3">
        <div class="d-flex justify-content-between align-items-center w-100 mb-3">
            <div class="d-flex align-items-center fs-4 indicator">Номера</div>
        </div>
        <div class="row flex-auto overflow-auto" style="max-height: 90%; overflow-x: hidden !important">
            @foreach ($rooms as $room)
                <div class="col-lg-4 mb-3">
                    <x-room-card :room="$room" />
                </div>
            @endforeach
        </div>
    </div>
@endsection
