import Handlebars from "handlebars";

import Block from "../../core/Block";
import { LinkButton } from "../linkButton";
import "./Error.less";
import { tmpl } from "./Error.tmpl";

interface ErrorProps {
  title?: string,
  description?: string
}

const error = Handlebars.compile(tmpl);

export class ErrorBlock extends Block {
  constructor(props: ErrorProps) {

    const linkButton = new LinkButton({
      linkText:"Назад к диалогам",
      href: "/",
      linkClass: "link_purple",
    });

    super({ linkButton, ...props });
  }

  render() {
    return this.compile(error, this.props);
  }
}
