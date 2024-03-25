@extends('layouts.app')
@section('content')
    @pushOnce('styles')
        <link href={{ asset('css/admin/login-page.css') }} rel="stylesheet">
    @endPushOnce
    <div class="page">
        <div class="row justify-content-center align-items-center h-100">
            <div class="row justify-content-center">
                <div class="col-md-6 col-lg-4">
                    <x-admin.login-form />
                </div>
            </div>
        </div>
    </div>
@endsection
