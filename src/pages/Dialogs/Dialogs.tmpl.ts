export const tmpl = `
<div classNames="container">
<header classNames="header">
  <div classNames="header__logo">
    <img src="https://telegram.org/img/t_logo.png" alt="Telegram Logo">
    <h1>Диалоги</h1>
  </div>
  <nav classNames="header__nav">
    <ul>
      <li><a href="/profile">Профиль</a></li>
      <li><a href="/">Выйти</a></li>
    </ul>
  </nav>
</header>
  <div classNames="dialogues">
    <ul>
      {{#each dialogues}}
        <li classNames="dialogue" data-id="{{id}}">{{name}}</li>
      {{/each}}
    </ul>
    <div classNames="conversation">
    {{#if selectedDialogue}}
      <h2>{{selectedDialogue.name}}</h2>
      <ul>
        {{#each selectedDialogue.messages}}
          <li classNames="message">
            <span classNames="sender">{{sender}}</span>
            <span classNames="text">{{text}}</span>
          </li>
        {{/each}}
      </ul>
    {{else}}
      <p>Диалог не выбран</p>
    {{/if}}
    <div classNames="message-input">
    <input type="text" classNames="input-field" id="message" name="message" placeholder="Введите сообщение" value="{{message}}">
    <button classNames="send-button">Отправить</button>
  </div>
  </div>
  </div>
</div>
`;
