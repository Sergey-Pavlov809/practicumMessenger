import Block from "../../core/Block";
import { StoreApp } from "../../core/Store";
import { Button } from "../Button";
import "./Options.less";
import Handlebars from "handlebars";
import { tmpl } from "./Options.tmpl";
import { deleteDialog } from "../../controllers/DialogControllers";

const options = Handlebars.compile(tmpl);

export class Options extends Block {
  protected init() {
    this.children.addUser = new Button({
      type: "button",
      text: "Добавить пользователя",
      className: "button",
      events: {
        click: () => {
          StoreApp.dispatch({
            modals: { addUsers: true },
          });

          this.props.open = false;
        },
      },
    });

    this.children.deleteUser = new Button({
      type: "button",
      text: "Удалить пользователя",
      className: "button",
      events: {
        click: () => {
          StoreApp.dispatch({
            modals: { deleteUsers: true },
          });
        },
      },
    });

    this.children.deleteDialog = new Button({
      type: "button",
      text: "Удалить диалог",
      className: "button",
      events: {
        click: () => {
          const chatId = StoreApp.getState().selectedDialog!.id!;

          deleteDialog({ chatId }).then();
        },
      },
    });
  }

  render() {
    return this.compile(options, this.props);
  }
}
