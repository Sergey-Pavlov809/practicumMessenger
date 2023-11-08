import Handlebars from "handlebars";
import Block from "../../core/Block";
import { StoreApp } from "../../core/Store";
import { Button } from "../Button";
import { tmpl } from "./searchUser.tmpl";
import { addUser, deleteUser } from "../../controllers/DialogControllers";

const searchUser = Handlebars.compile(tmpl);
export class SearchUser extends Block {
  constructor(props: {}) {
    super({ ...props });
  }

  init() {
    this.children.button = new Button({
      text: this.props.btnName,
      className: "popup__add_user_button",
      events: {
        click: (evt) => {
          evt.preventDefault();

          const data = {
            users: [this.props!.id!],
            dialogId: StoreApp.getState().selectedDialog!.id!,
          };

          if (this.props.btnName === "Добавить") {
            addUser(data).then();
          } else {
            deleteUser(data).then();
          }
        },
      },
    });
  }

  render() {

    return this.compile(searchUser, this.props);
  }
}
