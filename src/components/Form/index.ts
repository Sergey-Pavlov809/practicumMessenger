import Block from "../../utils/Block";
import { Button } from "../Button";
import { Input } from "../Input";
import { tmpl } from "./form.tmpl";

// type="text" className="form-control" id="username" name="username"
interface FormProps {
  button: Button;
  events?: Record<string, (args: any) => void>;
  inputs?: Input[];
  className?: string;
}

export class Form extends Block<FormProps> {
  constructor({ button, events = {}, inputs = [], className = "" }: FormProps) {
    const props = {
      button,
      inputs,
      className,
      events,
    };
    super(props);
    console.log(inputs);
  }

  public checkValidationInputs(): void {
    if (!!this.children.inputs && Array.isArray(this.children.inputs)) {
      (this.children.inputs as Input[]).forEach((input) => {
        input.checkValidation();
      });
    }
  }

  public isFormValid(): boolean {
    if (this.children.inputs && Array.isArray(this.children.inputs)) {
      return (this.children.inputs as Input[]).every((input) =>
        input.isInputValid()
      );
    }

    return false;
  }

  protected render() {
    return this.compile(tmpl, this.props);
  }
}
