import Handlebars from "handlebars";
import Block from "../../core/Block";
import { StoreApp } from "../../core/Store";
import { withStore } from "../../core/withStore";
import { createChats } from "../../controllers/ChatsControllers";
import { Button } from "../Button";
import { Input } from "../Input";

import "./AddNewChat.less";
import { tmpl } from "./AddNewChat.tmlp";

const addNewChat = Handlebars.compile(tmpl);

export class AddNewChatComponent extends Block {
  init() {
    this.children.inputAddNewChat = new Input({
      type: "text",
      className: "create_chat__input_create_chat",
      name: "input_add_create_chat",
      label: "Введите название чата",
    });

    this.children.buttonClose = new Button({
      type: "button",
      className: "close",
      events: {
        click: (evt) => {
          evt.preventDefault();

          console.log("asdf")

          this.setProps({ isSearch: false });

          StoreApp.dispatch({ popups: { newChat: false }, openedNewChat: false });
        },
      },
    });

    this.children.buttonSubmitCreateChat = new Button({
      label: "Сохранить",
      type: "submit",
      className: "create_chat__create_chat_button",
      events: {
        click: (evt) => {
          evt.preventDefault();
          const input = document
            .querySelector(".create_chat__input_create_chat") as HTMLInputElement;
          console.log(input)
          let { value } = input;

          if (value.length > 0) {
            createChats({ title: value }).finally(() => {
              value = "";
              StoreApp.dispatch({ popups: {} });
            });
          }
        },
      },
    });
  }

  render() {
    return this.compile(addNewChat, this.props);
  }
}

export const AddNewChat = withStore(AddNewChatComponent);
