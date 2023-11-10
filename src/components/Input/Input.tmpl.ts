export const tmpl = `
<div class="input__container {{ inputContainerClass }}">  
<input
    value="{{ value }}"
    name={{ name }}
    placeholder="{{ placeholder }}"
    type={{ type }}
    class="input {{ inputClass }}"
>
 <span class="input__error">{{ error }}</span>
</div>
`;
