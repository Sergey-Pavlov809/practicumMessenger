import Block from "../../core/Block";
import { StoreApp } from "../../core/Store";
import { deleteChat } from "../../controllers/ChatsControllers";
import { Button } from "../Button";
import "./Controls.less";
import Handlebars from "handlebars";
import { tmpl } from "./Controls.tmpl";


const controls = Handlebars.compile(tmpl);

export class Controls extends Block {
  protected init() {
    this.children.add = new Button({
      type: "button",
      label: "Добавить пользователя",
      className: "controls__button",
      events: {
        click: () => {
          StoreApp.dispatch({
            popups: { addUsers: true },
          });

          this.props.open = false;
        },
      },
    });

    this.children.deleteUser = new Button({
      type: "button",
      label: "Удалить пользователя",
      className: "",
      events: {
        click: () => {
          StoreApp.dispatch({
            popups: { deleteUsers: true },
          });
        },
      },
    });

    this.children.deleteChat = new Button({
      type: "button",
      label: "Удалить чат",
      className: "",
      events: {
        click: () => {
          const chatId = StoreApp.getState().selectedChat!.id!;

          deleteChat({ chatId }).then();
        },
      },
    });
  }

  render() {
    return this.compile(controls, this.props);
  }
}
