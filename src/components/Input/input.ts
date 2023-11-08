import Handlebars from "handlebars";

import { tmpl } from "./input.tmpl";
import Block from "../../core/Block";
import "./styles.less";
import { Button } from "../Button";
import { StoreApp } from "../../core/Store";
import { sendMessage } from "../../controllers/MessagesControllers";
import { getDialogs } from "../../controllers/DialogControllers";

interface InputProps {
  value?: string,
  error?: string,
  name?: string,
  placeholder?: string,
  type?: string,
  inputClass?: string,
  inputContainerClass?: string,
  events?: { 
    focusin?: (e: Event) => void;
    focusout?: (e: Event) => void;
    change?: (e: Event) => void
  };
}

const input = Handlebars.compile(tmpl);

export class Input extends Block {
  constructor(props: InputProps) {

    super({ ...props });
  }

  init() {
    this.children.sendMessageButton = new Button({
      className: "send_message_button",
      events: {
        click: (evt) => {
          this.onSubmit(evt);
        },
      },
    });
  }

  onSubmit(evt: Event) {
    evt.preventDefault();
    const inputMessage = document.querySelector(".input_message") as HTMLInputElement;

    let { value } = inputMessage;

    if (value.length > 0) {
      const dialogId = StoreApp.getState().selectedDialog!.id!;

      sendMessage(dialogId, value);

      getDialogs().finally(() => {
        value = "";
      });
    }
  }

  render() {
    return this.compile(input, this.props);
  }
}
