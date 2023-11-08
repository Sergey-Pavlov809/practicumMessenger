export const tmpl = `
      <div class="header">
        <div>
          <div class="header__name">
            {{{ title }}}          
          </div>
          <p class="header__title_users">Участники:<span class="header__users"> {{{usersInDialog}}} </span> </p>
        </div>
        <div class="header__utils">
          {{{ button }}} 
          {{#if isShowHint}}
            {{{ hint }}}
          {{/if}}
        </div>
      </div>;
`;
