export const tmpl = `
<div class="registration-form">
  <h2>Регистрация</h2>
  <form onSubmit={onClick}>
    <div class="form-group">
      <label for="username">Имя пользователя:</label>
      <input type="text" class="form-control" id="username" name="username" placeholder="Введите имя пользователя" value="{{username}}">
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" class="form-control" id="email" name="email" placeholder="Введите email" value="{{email}}">
    </div>
    <div class="form-group">
      <label for="password">Пароль:</label>
      <input type="password" class="form-control" id="password" name="password" placeholder="Введите пароль" value="{{password}}">
    </div>
    <div class="form-group">
      <label for="confirm-password">Подтвердите пароль:</label>
      <input type="password" class="form-control" id="confirm-password" name="confirm-password" placeholder="Подтвердите пароль" value="{{confirmPassword}}">
    </div>
    <button type="submit" class="btn btn-primary"><a href="./dialogs">Зарегистрироваться</a></button>
  </form>
</div>
`;
