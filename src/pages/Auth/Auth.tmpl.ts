export const tmpl = `
<div class="registration-form">
  <h2>Войти</h2>
  <form onsubmit="return {{onsubmit}}()">
    <div class="form-group">
      <label for="username">Имя пользователя:</label>
      <input type="text" class="form-control" id="username" name="username" placeholder="Введите имя пользователя" value="{{username}}">
    </div>
    <div class="form-group">
      <label for="password">Пароль:</label>
      <input type="password" class="form-control" id="password" name="password" placeholder="Введите пароль" value="{{password}}">
    </div>
    <button type="submit" class="btn btn-primary">
      <a href="./dialogs">Войти</a>
    </button>
  </form>
  <a href="./registration">or Sign up?</a>
</div>
`;
