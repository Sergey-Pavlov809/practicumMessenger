export const tmpl = `      
<div class="avatar">
{{#if user.avatar}}
  <img class="avatar-logo"
   src="https://ya-praktikum.tech/api/v2/resources{{user.avatar}}"
  alt="avatar" 
/>
{{else}}
  <img alt="поменять аватар" class="avatar-base logo" src={{ pen }}/>
{{/if}}

<label class="avatar-label">
  {{{ inputAvatar }}}
  <span class="avatar-change">Сменить аватар</span>
</label>
</div>
</div>`;
