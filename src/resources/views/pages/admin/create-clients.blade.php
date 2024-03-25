@extends('layouts.admin')
@section('content')
        <x-sidebar.sidebar />
        <div class="column justify-content-center bg-white w-100 rounded pe-2 ps-2 pt-3">
            <div class="d-flex justify-content-between align-items-center w-100 mb-3">
                <div class="d-flex align-items-center fs-4 indicator">Добавление клиента</div>
            </div>
            <x-admin.create-client-form />
        </div>
@endsection
