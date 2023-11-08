import Handlebars from "handlebars";

import { tmpl } from "./linkButton.tmpl";
import Block from "../../core/Block";
import { withRouter } from "../../routing/withRouter";
import "./styles.less";

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
