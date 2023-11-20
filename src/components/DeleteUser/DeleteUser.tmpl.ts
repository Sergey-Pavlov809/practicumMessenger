export const tmpl = ` 
      <div class="modal {{#if modals.deleteUsers}} modal_opened {{/if}}">
            
          <form class="modal__container">
           {{#if dialogUsersList}}
           {{{buttonClose}}}
            <h3 class="modal__title">Участники на выбывание из вашего милого диалогика</h3>
              <ul class="modal__list">                  
                {{#each dialogUsersList}}
                  {{{this}}}
                {{/each}}
              </ul>
            {{else}}
              {{{buttonClose}}}
              <p  class="modal__title">Вы еще никого не добавили, чтобы удалить</p>
            {{/if}}    
          </form>
        </div>
      </div>`;
