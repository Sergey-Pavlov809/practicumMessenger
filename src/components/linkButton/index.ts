import Handlebars from "handlebars";

import Block from "../../core/Block";
import { withRouter } from "../../routing/withRouter";
import "./LinkButton.less";
import { tmpl } from "./linkButton.tmpl";

interface LinkButtonProps {
  linkClass?: string,
  href: string,
  linkText: string,
  events?: { click: (e: Event) => void };
}

const linkButton = Handlebars.compile(tmpl);

export class LinkButtonComponent extends Block {
  constructor(props: LinkButtonProps) {
    super({ ...props });
  }

  render() {
    return this.compile(linkButton, this.props);
  }
}

export const LinkButton = withRouter(LinkButtonComponent);
