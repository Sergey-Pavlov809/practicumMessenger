import Handlebars from "handlebars";
import Block from "../../core/Block";
import { Button } from "../Button";
import { Hint } from "../hint";
import "./styles.less";
import { tmpl } from "./header.tmpl";

interface HeaderProps {
  title?: string;
  usersInDialog?: string;
  isShowHint?: boolean;
}

const header = Handlebars.compile(tmpl);

export class Header extends Block {
  constructor(props: HeaderProps) {
    super({ ...props });
  }

  protected init() {
    this.children.button = new Button({
      type: "button",
      className: "dialog__more",
      events: {
        click: () => {
          this.props.isShowHint = !this.props.isShowHint;
        },
      },
    });

    this.children.hint = new Hint({ open: false });
  }

  render() {
    return this.compile(header, this.props);
  }
}
