export const tmpl = ` 
      <div class="popup {{#if popups.deleteUsers}} popup_opened {{/if}}">
            {{{buttonClose}}}
          <form class="popup__container">
           {{#if dialogUsersList}}
            <h3 class="popup__title">Участники на выбывание из вашего милого диалогика</h3>
              <ul class="popup__list">                  
                {{#each dialogUsersList}}
                  {{{this}}}
                {{/each}}
              </ul>
            {{else}}
              <p  class="popup__title">Вы еще никого не добавили, чтобы удалить</p>
            {{/if}}    
          </form>
        </div>
      </div>`;
