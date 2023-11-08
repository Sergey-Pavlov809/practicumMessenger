import Handlebars from "handlebars";

import { tmpl } from "./Button.tmpl";
import Block from "../../core/Block";
import "./Button.less";

interface ButtonProps {
  className?: string,
  text?: string,
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
