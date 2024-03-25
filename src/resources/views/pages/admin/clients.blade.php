@extends('layouts.admin')
@section('content')
    <x-sidebar.sidebar />
    <div class="column justify-content-center bg-white w-100 rounded pe-2 ps-2 pt-3">
        <div class="d-flex justify-content-between align-items-center w-100 mb-3">
            <div class="d-flex align-items-center fs-4 indicator">Клиенты</div>
            <a href="{{ route('admin.clients.create') }}" class="btn btn-primary">Добавить клиента</a>
        </div>
        <div class="table-wrap">
            <table class="table table-responsive-xl">
                <thead>
                    <tr>
                        <th>ID Клиента</th>
                        <th>Имя</th>
                        <th>Фамилия</th>
                        <th>Отчество</th>
                        <th>Дата добавлнеия</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($clients as $client)
                        <tr class="alert" role="alert">
                            <td>{{ $client->id }}</td>
                            <td>{{ $client->first_name }}</td>
                            <td>{{ $client->first_name }}</td>
                            <td>{{ $client->first_name }}</td>
                            <td>{{ $client->created_at }}</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
@endsection
