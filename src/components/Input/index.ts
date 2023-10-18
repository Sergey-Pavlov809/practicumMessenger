import Block from "../../utils/Block";
import { tmpl } from "./Input.tmpl";
import "./Input.less";

interface TProps {
  name: string;
  label: string;
  events?: Record<string, (args: unknown) => void>;
  error?: string;
  classNames?: string;
  value?: string;
  type?: string;
  checkValidation?: (args: string) => string | null;
}

export class Input extends Block<TProps> {
  constructor(props: TProps) {
    super({ value: "", error: undefined, classNames: "", ...props });
  }

  isInputValid() {
    if (this.props.checkValidation != null) {
      return Boolean(!this.props.checkValidation(this.value));
    }

    return true;
  }

  checkValidation() {
    if (this.props.checkValidation != null) {
      const error = this.props.checkValidation(this.value);
      console.log(error == null, this.props.error);
      if (error != null) {
        this.setProps({
          ...this.props,
          value: this.value,
          error,
          classNames: `${this.props.classNames} error`,
        });
      }
      if (error == null && this.props.error != "") {
        this.setProps({
          ...this.props,
          value: this.value,
          error: undefined,
          classNames: this.props.classNames?.replace("error", "").trim(),
        });
      }
    }
  }

  get value() {
    console.log(this.element);
    return this.element?.querySelector("input")?.value ?? "";
  }

  protected render() {
    return this.compile(tmpl, this.props);
  }
}
