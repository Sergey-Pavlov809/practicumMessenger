export const tmpl = `
<form onsubmit="{{onClick}}">
    {{#each inputs}}
        {{{this}}}
    {{/each}}
    {{{submitButton}}}
  </form>
`;
