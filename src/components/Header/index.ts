import Handlebars from "handlebars";
import Block from "../../core/Block";
import { Button } from "../Button";
import { Options } from "../Options";
import "./Header.less";
import { tmpl } from "./Header.tmpl";

interface HeaderProps {
  title?: string;
  usersInDialog?: string;
  isShowOptions?: boolean;
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
          this.props.isShowOptions = !this.props.isShowOptions;
        },
      },
    });

    this.children.options = new Options({ open: false });
  }

  render() {
    return this.compile(header, this.props);
  }
}
