import Block from "../../core/Block";
import { StoreApp } from "../../core/Store";
import { Button } from "../Button";
import "./styles.less";
import Handlebars from "handlebars";
import { tmpl } from "./hint.tmpl";
import { deleteDialog } from "../../controllers/DialogControllers";

const hint = Handlebars.compile(tmpl);

export class Hint extends Block {
  protected init() {
    this.children.addUser = new Button({
      type: "button",
      text: "Добавить пользователя",
      className: "button",
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
      text: "Удалить пользователя",
      className: "button",
      events: {
        click: () => {
          StoreApp.dispatch({
            popups: { deleteUsers: true },
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
          const dialogId = StoreApp.getState().selectedDialog!.id!;

          deleteDialog({ dialogId }).then();
        },
      },
    });
  }

  render() {
    return this.compile(hint, this.props);
  }
}
