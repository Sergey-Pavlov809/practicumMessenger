export const tmpl = ` 
      <div class="modal {{#if modals.addUsers}} modal_opened {{/if}}">
          <form class="modal__container"> 
          {{{buttonClose}}}
            <h3 class="modal__title">Поиск</h3>
            <div class="modal__search">
              {{{ inputSearchUser }}}
              {{{ buttonSearch }}}
            </div>
            {{#if isSearch}}
              <p class="modal__title">Найдено:</p>
              <ul class="modal__list">
              {{#each searchList}}
                {{{this}}}
              {{/each}}
              </ul>
              {{{buttonClose}}}
            {{/if}}
            {{#if error}}    
              <p class="modal__title">Не найдено ни одного пользователя</p>
           {{/if}}
          </form>
        </div>
      </div>`;
