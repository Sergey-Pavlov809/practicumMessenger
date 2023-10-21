import Block from "../../utils/Block";
import { tmpl } from "./Button.tmpl";
import "./Button.less";

interface TProps {
  label: string;
  events?: Record<string, (args: any) => void>;
  type?: string;
  className?: string;
}

export class Button extends Block<TProps> {
  constructor(props: TProps) {
    super(props);
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
