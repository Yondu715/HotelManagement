<form method="POST" action="{{ route('admin.clients.store') }}">
    @csrf
    @if (Session::has('error'))
        <div class="alert alert-danger">{{ Session::get('error') }}</div>
    @endif
    <div class="form-group">
        <input placeholder="Имя" type="text" name="firstName" class="form-control" required>
    </div>
    <div class="form-group">
        <input placeholder="Фамилия" type="text" name="lastName" class="form-control" required>
    </div>
    <div class="form-group">
        <input placeholder="Отчество" type="text" name="middleName" class="form-control">
    </div>
    <div class="form-group d-flex gap-1">
        <input placeholder="Серия паспорта" type="text" name="series" class="form-control">
        <input placeholder="Номер паспорта" type="text" name="number" class="form-control">
    </div>
    <div class="form-group">
        <input placeholder="Комментарий" type="text" name="comment" class="form-control" required>
    </div>
    <div class="form-group">
        <button type="submit" class="btn btn-primary">Добавить</button>
    </div>
</form>
