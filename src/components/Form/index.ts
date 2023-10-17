import Block from "../../utils/Block";
import { Input } from "../Input";
import { tmpl } from "./form.tmpl";

//type="text" class="form-control" id="username" name="username" placeholder="Введите имя пользователя"
interface TForm {
  inputs?: Input[];
  submitButton: any;
  classNames?: string;
  events?: Record<string, (args: any) => void>;
}

export class Form extends Block<TForm> {
  constructor(props: TForm) {
    super(props);
    console.log(props);
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
