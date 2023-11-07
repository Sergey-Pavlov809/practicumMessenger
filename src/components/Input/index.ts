import Handlebars from "handlebars";

import Block from "../../core/Block";
import "./Input.less";
import { Button } from "../Button";
import { StoreApp } from "../../core/Store";
import { sendMessage } from "../../controllers/MessagesControllers";
import { getChats } from "../../controllers/ChatsControllers";
import { tmpl } from "./input.tmpl";
interface InputProps {
  value?: string,
  error?: string,
  name?: string,
  label?: string,
  type?: string,
  className?: string,
  inputContainerClass?: string,
  events?: { 
    focusin?: (e: Event) => void; 
    focusout?: (e: Event) => void;
    change?: (e: Event) => void };
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
      const chatId = StoreApp.getState().selectedChat!.id!;

      sendMessage(chatId, value);

      getChats().finally(() => {
        value = "";
      });
    }
  }

  render() {
    return this.compile(input, this.props);
  }
}
