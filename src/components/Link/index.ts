import Handlebars from "handlebars";

import { tmpl } from "./Link.tmpl";
import Block from "../../core/Block";
import { withRouter } from "../../routing/withRouter";
import "./Link.less";

interface LinkProps {
  className?: string,
  href: string,
  label: string,
  events?: { click: (e: Event) => void };
}

const linkButton = Handlebars.compile(tmpl);

export class BaseLink extends Block {
  constructor(props: LinkProps) {
    super({ ...props });
  }

  render() {
    return this.compile(linkButton, this.props);
  }
}

export const Link = withRouter(BaseLink);
