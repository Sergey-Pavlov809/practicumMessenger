export const tmpl = `
<section class="dialog">
   {{#if selectedDialog.id}}
   <header class="dialog__header">
      {{{ header }}}
</header>
   <main class="dialog__main">
   {{#if messageDialog }}
      {{#each  messageDialog}}
         {{{this}}} 
      {{/each}}
   {{else}}
   <div class="dialog__unselected">
   <p>Напишите первое сообщение</p>
   </div>
   {{/if}}
</main>

<footer class="dialog__footer">
   <div class="dialog__content dialog__content__footer">
   {{{ inputMessage }}}
   {{{ sendMessageButton }}}
   </footer>
{{else}}
<div class="dialog__unselected">
   <p>Выберите диалог</p>
</div>
  {{/if}}
{{{ DeleteUserModal }}}
{{{ AddUserModal }}}
</section>
`;
