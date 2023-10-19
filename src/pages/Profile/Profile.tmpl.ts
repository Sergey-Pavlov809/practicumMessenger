export const tmpl = `
<div>
<header class="header">
  <div class="header__logo">
    <img src="https://telegram.org/img/t_logo.png" alt="Telegram Logo">
    <h1>Настройки</h1>
  </div>
  <nav class="header__nav">
    <ul>
      <li><a href="/dialogs">Диалоги</a></li>
      <li><a href="/">Выход</a></li>
    </ul>
  </nav>
</header>

<div class="profile">
  {{{form}}}
</div>
</div>

`;
