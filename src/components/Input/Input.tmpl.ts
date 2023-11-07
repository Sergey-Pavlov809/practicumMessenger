export const tmpl = `
<div class="input__container {{ inputContainerClass }}">
<label class="input__label" for={{name}}>{{label}}</label>
<input
    value='{{value}}'
    name={{name}}
    label='{{label}}'
    type={{type}}
    class="input {{className}}"
>
 <span class="error">{{error}}</span>
</div>
`;
