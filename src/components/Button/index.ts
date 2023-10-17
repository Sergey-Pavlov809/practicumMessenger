import Block from "../../utils/Block";

type ButtonProps = {
  label: string;
  events?: Record<string, (args: any) => void>;
  type?: string;
  classNames?: string;
};

export class Button extends Block {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return this.compile(
      '<button type={{type}}">{{label}}</button>',
      this.props
    );
  }
}
