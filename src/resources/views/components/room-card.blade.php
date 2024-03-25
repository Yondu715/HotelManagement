<div class="d-flex flex-column position-relative room-card">
    <img src={{ asset($room->image) }} alt="Комната">
    <div class="d-flex flex-column position-absolute bottom-0 text-white ps-3 pe-3 w-100">
        <h3 class="text-capitalize fn-bold text">{{ $room->name }}</h3>
        <p class="fn-normal text">Вместительность: {{ $room->capacity }}</p>
        <p class="fn-normal text">Тип: {{ $room->comfort_level }}</p>
        <div class="d-flex justify-content-between align-items-center">
            <div class="text">
                Цена: <span class="fs-3 fn-bold">{{ $room->price }} ₽</span>
            </div>
        </div>
    </div>
</div>
