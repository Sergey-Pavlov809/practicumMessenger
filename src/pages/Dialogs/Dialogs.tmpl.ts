export const tmpl = `
<div class="container">
<header class="header">
  <div class="header__logo">
    <img src="https://telegram.org/img/t_logo.png" alt="Telegram Logo">
    <h1>Диалоги</h1>
  </div>
  <nav class="header__nav">
    <ul>
      <li><a href="/profile">Профиль</a></li>
      <li><a href="/">Выйти</a></li>
    </ul>
  </nav>
</header>
  <div class="dialogues">
    <ul>
      {{#each dialogues}}
        <li class="dialogue" data-id="{{id}}">{{name}}</li>
      {{/each}}
    </ul>
    <div class="conversation">
    {{#if selectedDialogue}}
      <h2>{{selectedDialogue.name}}</h2>
      <ul>
        {{#each selectedDialogue.messages}}
          <li class="message">
            <span class="sender">{{sender}}</span>
            <span class="text">{{text}}</span>
          </li>
        {{/each}}
      </ul>
    {{else}}
      <p>Диалог не выбран</p>
    {{/if}}
  </div>
  </div>
  
</div>
`;
