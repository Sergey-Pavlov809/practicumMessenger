export const tmpl = `
<header classNames="header">
  <div classNames="header__logo">
    <img src="https://telegram.org/img/t_logo.png" alt="Telegram Logo">
    <h1>Настройки</h1>
  </div>
  <nav classNames="header__nav">
    <ul>
      <li><a href="/dialogs">Диалоги</a></li>
    </ul>
  </nav>
</header>

<div classNames="profile">
  <form>
    <div classNames="edit-profile__avatar">
      <img src="{{avatar}}" alt="Avatar">
      <input type="file" accept="image/*" value="{{avatar}}">
    </div>
    <div classNames="edit-profile__info">
    <label for="first_name">Имя:</label>
      <input type="text" id="first_name" name="first_name" value="{{first_name}}">
      <label for="second_name">Фамилия:</label>
      <input type="text" id="second_name" name="second_name" value="{{second_name}}">
      <label for="display_name">Отображаемое имя:</label>
      <input type="text" id="display_name" name="display_name" value="{{display_name}}">
      <label for="login">Логин:</label>
      <input type="text" id="login" name="login" value="{{login}}">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" value="{{email}}">
      <label for="phone">Phone:</label>
      <input type="tel" id="phone" name="phone" value="{{phone}}"> 
      <button type="submit"><a href="/dialogs">Сохранить</a></button>
    </div>
  </form>
</div>
`;
