export const tmpl = `
      <div class="header">
        <div>
          <div class="header__name">
            {{{ title }}}          
          </div>
          <p class="header__title">
            Участники:
            <span class="header__users"> 
              {{{usersInDialog}}} 
            </span> 
            </p>
        </div>
        <div class="header__utils">
          {{{ button }}} 
          {{#if isShowOptions}}
            {{{ options }}}
          {{/if}}
        </div>
      </div>;
`;
