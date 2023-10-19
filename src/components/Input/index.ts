import Block from "../../utils/Block";
import { tmpl } from "./Input.tmpl";
import "./Input.less";

interface TProps {
  name: string;
  label?: string;
  events?: Record<string, (args: unknown) => void>;
  placeholder?: string;
  error?: string;
  className?: string;
  value?: string;
  type?: string;
  checkValidation?: (args: string) => string | null;
}

export class Input extends Block<TProps> {
  constructor(props: TProps) {
    super({
      value: "",
      error: undefined,
      className: "",
      placeholder: "",
      events: {
        blur: () => {
          this.checkValidation();
        },
      },
      ...props,
    });
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
      if (Number(error?.length) > 0 && error) {
        this.setProps({
          ...this.props,
          value: this.value,
          error,
          className: `${this.props.className} error`,
        });
      } else {
        this.setProps({
          ...this.props,
          value: this.value,
          error: undefined,
          className: `${this.props.className}`,
        });
      }
    }
  }

  get value() {
    return this.element?.querySelector("input")?.value ?? "";
  }

  protected render() {
    return this.compile(tmpl, this.props);
  }
}
