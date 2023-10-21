export const tmpl = `
<form class="registration-form {{className}}">
    {{#each inputs}}
        {{{this}}}
    {{/each}}
    
    {{{button}}}
</form>`;
