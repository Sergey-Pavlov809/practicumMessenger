import Handlebars from "handlebars";

import { tmpl } from "./Message.tmpl";
import Block from "../../core/Block";

import "./Message.less";

interface MessageProps {
  name?: string,
  text: string,
  messageClass?: string
}

const message = Handlebars.compile(tmpl);

export class Message extends Block {
  constructor(props: MessageProps) {

    super({ ...props });
  }

  render() {
    return this.compile(message, this.props);
  }
}
