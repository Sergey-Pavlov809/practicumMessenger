import Handlebars from "handlebars";
import Block from "../../core/Block";
import { StoreApp } from "../../core/Store";
import { withStore } from "../../core/withStore";
import { Button } from "../Button";
import { SearchUser } from "../SearchUser";
import "./styles.less";
import { tmpl } from "./DeleteUser.tmpl";


const modalDeleteUser = Handlebars.compile(tmpl);

class DeleteUserBase extends Block {
  init() {
    this.children.buttonClose = new Button({
      type: "button",
      className: "modal__close",
      events: {
        click: (evt) => {
          evt.preventDefault();
          StoreApp.dispatch({ modals: { deleteUsers: false } });
        },
      },
    });
  }

  protected componentDidUpdate(_oldProps: any, _newProps: any): boolean {
    this.children.dialogUsersList = _newProps.dialogUsers.map((data: unknown) => {
      return new SearchUser({
        ...data as object,
        btnName: "Удалить",
      });
    });

    return true;
  }

  render() {
    return this.compile(modalDeleteUser, this.props);
  }
}

export const DeleteUser = withStore(DeleteUserBase);
