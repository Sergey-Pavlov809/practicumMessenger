export const tmpl = `
<div class="input">
    <label class="input__label" for={{name}}>{{label}}</label>
    <input type='{{type}}' value='{{value}}' id={{name}} type="text" name={{name}} class="input {{className}}" >
    
    {{#if error}}
        <p class="error">{{error}}</p>
    {{/if}}
</div>
`;
