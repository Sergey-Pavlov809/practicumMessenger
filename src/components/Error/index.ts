import Handlebars from "handlebars";

import Block from "../../core/Block";

import "./Error.less";
import { Link } from "../Link";
import { tmpl } from "./error.tmpl";

interface ErrorProps {
  title?: string,
  description?: string
}

const error = Handlebars.compile(tmpl);

export class ErrorBlock extends Block {
  constructor(props: ErrorProps) {

    const back = new Link({
      label:"Назад к чатам",
      href: "/",
      className: "link",
    });

    super({ back, ...props });
  }

  render() {
    return this.compile(error, this.props);
  }
}
