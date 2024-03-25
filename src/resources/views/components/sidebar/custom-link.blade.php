<a href="{{ route($to) }}"
    class="sidebar-link {{ Route::currentRouteName() === $to ? 'active' : 'link-dark' }}">
    {{ $text }}
</a>
