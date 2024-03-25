<div class="d-flex flex-column flex-shrink-0 bg-white h-100 rounded" style="width: 15vw;">
    <a href="/" class="d-flex align-items-center justify-content-center link-dark text-decoration-none">
        <span class="fs-4">Luxury Hotel</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
        <li class="linkContainer">
            <x-sidebar.custom-link to="admin.dashboard" text="Главная"/>
        </li>
        <li>
            <x-sidebar.custom-link to="admin.clients.index" text="Клиенты"/>
        </li>
        <li>
            <x-sidebar.custom-link to="admin.rooms.index" text="Номера"/>
        </li>
        <li>
            <x-sidebar.custom-link to="admin.bookings" text="Брони"/>
        </li>
    </ul>
    <hr>
    @auth
        <div class="dropdown user">
            <a href="#" class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
                id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                <strong>{{ auth()->user()->name }}</strong>
            </a>
            <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2" style="">
                <li><a class="dropdown-item" href="#">Профиль</a></li>
                <li>
                    <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">Выйти</a></li>
            </ul>

        </div>
    @endauth
</div>
