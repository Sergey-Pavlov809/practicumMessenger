import Handlebars from "handlebars";
import Block from "../../core/Block";
import "./Button.less";
import { tmpl } from "./Button.tmpl";

interface ButtonProps {
  className?: string,
  label?: string,
  type?: string,
  events?: { click: (e: Event) => void };
}

const button = Handlebars.compile(tmpl);

export class Button extends Block {
  constructor(props: ButtonProps) {
    super({ ...props });
  }

  render() {
    return this.compile(button, this.props);
  }
}
