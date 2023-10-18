export const tmpl = `
<form classNames="form auth__form {{classNamesNames}}">
    {{#if title}} <h2 classNames="form__title">{{title}}</h2> {{/if}}
    {{#each inputs}}
        {{{this}}}
    {{/each}}
    {{{button}}}
</form>`;
