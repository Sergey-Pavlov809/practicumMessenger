export const tmpl = `<div>
<aside class="sidebar">
<div class="sidebar__container">
<div class="sidebar__main">
<a class="sidebar__link" href="/settings"> 
<img src={{ pen }} alt="изменить" class="img" /> 
</a>
{{{ inputSearch }}}
</div>
{{{ buttonCreateDialog }}}
</div>

  <nav class="sidebar__nav">
     <ul class="sidebar__ul">
      {{#each userInfoDialog }}
         {{{this}}}
      {{/each}}
    </ul>
  </nav>
</aside>
  
{{{ dialogContent }}}
{{{ AddUserModal}}}

        {{#if openedNewDialog }} 
          {{{ modalNewDialog }}} 
        {{/if}}
</div>
`;
