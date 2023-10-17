import Block from "../../utils/Block";
import { tmpl } from "./input.tmpl";

//type="text" class="form-control" id="username" name="username" placeholder="Введите имя пользователя"
interface InputProps {
  events?: {
    focus: () => void;
    change: () => void;
  };
  type?: string;
  class?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  validator?: () => boolean;
  label?: string;
}

export class Input extends Block<InputProps> {
  constructor(props: InputProps) {
    super(props);
  }

  get isValid() {
    return (this.element! as HTMLInputElement).value.length > 10;
  }

  get getValue() {
    return (this.element! as HTMLInputElement).value;
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
