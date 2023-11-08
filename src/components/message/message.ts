import Handlebars from "handlebars";

import { tmpl } from "./message.tmpl";
import Block from "../../core/Block";

import "./styles.less";

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
