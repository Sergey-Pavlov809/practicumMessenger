export const tmpl = `
<div class="registration-form">
  <h2>Регистрация</h2>
  <form onSubmit={onClick}>
    <div class="form-group">
      <label for="first_name">Имя:</label>
      <input type="text" class="form-control" id="first_name" name="first_name" placeholder="Введите имя" value="{{first_name}}">
    </div>
    <div class="form-group">
      <label for="second_name">Фамилия:</label>
      <input type="text" class="form-control" id="second_name" name="second_name" placeholder="Введите фамилию" value="{{second_name}}">
    </div>
    <div class="form-group">
    <label for="login">Логин:</label>
    <input type="text" class="form-control" id="login" name="login" placeholder="Введите логин" value="{{login}}">
  </div>
    <div class="form-group">
      <label for="phone">Телефон:</label>
      <input type="text" class="form-control" id="phone" name="phone" placeholder="Введите телефон" value="{{phone}}">
    </div>   
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" class="form-control" id="email" name="email" placeholder="Введите email" value="{{email}}">
    </div>
    <div class="form-group">
      <label for="password">Пароль:</label>
      <input type="password" class="form-control" id="password" name="password" placeholder="Введите пароль" value="{{password}}">
    </div>
    <button type="submit" class="btn btn-primary"><a href="./dialogs">Зарегистрироваться</a></button>
  </form>
</div>
`;
