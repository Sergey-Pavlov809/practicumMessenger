export const tmpl = `
<div class="login-form">
  <form>
    <div class="{{"form-group"}}">
    <p>Sign in?</p>
      <label for="username">Имя пользователя:</label>
      <input type="text" class="form-control" id="username" name="username" placeholder="Введите имя пользователя" value="{{username}}">
    </div>
    <div class="form-group">
      <label for="password">Пароль:</label>
      <input type="password" class="form-control" id="password" name="password" placeholder="Введите пароль" value="{{password}}">
    </div>
    <button type="submit" class="btn btn-primary">Войти</button>
    <a href="./registration">or Sign up?</a>
  </form>
</div>
`;
