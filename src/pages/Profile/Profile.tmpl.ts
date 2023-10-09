export const tmpl = `
<header class="header">
  <div class="header__logo">
    <img src="https://telegram.org/img/t_logo.png" alt="Telegram Logo">
    <h1>Настройки</h1>
  </div>
  <nav class="header__nav">
    <ul>
      <li><a href="/dialogs">Диалоги</a></li>
    </ul>
  </nav>
</header>

<div class="profile">
  <div class="avatar">
    <img src="{{avatarUrl}}" alt="Avatar">
    <button class="avatar__edit-btn">Edit</button>
  </div>
  <div class="info">
    <h2>{{name}}</h2>
    <p>{{email}}</p>
    <p>{{phone}}</p>
    <button class="info__edit-btn">Edit</button>
  </div>
</div>

<div class="edit-profile">
  <form>
    <div class="edit-profile__avatar">
      <img src="{{avatarUrl}}" alt="Avatar">
      <input type="file" accept="image/*">
    </div>
    <div class="edit-profile__info">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" value="{{name}}">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" value="{{email}}">
      <label for="phone">Phone:</label>
      <input type="tel" id="phone" name="phone" value="{{phone}}">
      <button type="submit">Save</button>
    </div>
  </form>
</div>
`;
