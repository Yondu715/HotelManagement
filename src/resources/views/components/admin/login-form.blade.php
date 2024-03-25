<form method="POST" action="{{ route('admin.login') }}">
    @csrf
    @if (Session::has('error'))
        <div class="alert alert-danger">{{ Session::get('error') }}</div>
    @endif
    <div class="form-group">
        <input placeholder="Почта" type="email" name="email" id="email" class="form-control" required>
    </div>
    <div class="form-group">
        <input placeholder="Пароль" type="password" name="password" id="password" class="form-control" required>
    </div>
    <div class="form-group">
        <button type="submit" class="login-btn">Войти</button>
    </div>
    <div class="form-group d-md-flex">
        <label class="checkbox-wrap">
            <input type="checkbox" name="rememberMe" value="1" />
            Запомнить меня
        </label>
    </div>
</form>
