export const tmpl = `
<div>
    <label class="input__label" for={{name}}>{{labelValue}}</label>
    <input type='{{type}}' value='{{value}}' id={{name}} type="text" name={{name}} class="input {{class}}" >
    
    {{#if error}}
        <p class="error">{{error}}</p>
    {{/if}}
</div>
`;
