import Block from "../../utils/Block";
import { Button } from "../Button";
import { Input } from "../Input";
import { Link } from "../Link";
import { tmpl } from "./form.tmpl";

//type="text" classNames="form-control" id="username" name="username" placeholder="Введите имя пользователя"
interface FormProps {
  button: Button;
  link?: Link;
  events?: Record<string, (args: any) => void>;
  inputs?: Input[];
  classNamesNames?: string;
  title?: string;
}

export class Form extends Block<FormProps> {
  constructor({
    button,
    link,
    events = {},
    inputs = [],
    classNamesNames = "",
    title = "",
  }: FormProps) {
    const props = {
      button,
      link,
      inputs,
      classNamesNames,
      title,
      events,
    };
    super(props);
  }

  public checkValidationInputs(): void {
    if (this.children.inputs && Array.isArray(this.children.inputs))
      (this.children.inputs as Input[]).forEach((input) => {
        input.checkValidation();
      });
  }

  public isFormValid(): boolean {
    if (this.children.inputs && Array.isArray(this.children.inputs)) {
      return (this.children.inputs as Input[]).every((input) => {
        return input.isInputValid();
      });
    }

    return false;
  }

  protected render() {
    return this.compile(tmpl, this.props);
  }
}
