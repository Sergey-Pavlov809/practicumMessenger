export const tmpl = `
<div>
    <label classNames="input__label" for={{name}}>{{labelValue}}</label>
    <input type='{{type}}' value='{{value}}' id={{name}} type="text" name={{name}} classNames="input {{classNames}}" >
    
    {{#if error}}
        <p classNames="error">{{error}}</p>
    {{/if}}
</div>
`;
