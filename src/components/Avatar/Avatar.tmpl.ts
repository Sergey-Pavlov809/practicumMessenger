export const tmpl = `      
<div class="avatar">
  {{#if user.avatar}}
    <img class="logo"
           src="https://ya-praktikum.tech/api/v2/resources{{user.avatar}}" 
           alt="avatar" />
        {{else}}
            <img
             alt="поменять аватар"
             class="pen" 
             src={{ pen }}
            alt="Поменять аватар" 
          />  
        {{/if}}
     
          <label class="label">
            {{{ inputAvatar }}}
            <span class="change">Сменить аватар</span>
          </label>
</div>`;
