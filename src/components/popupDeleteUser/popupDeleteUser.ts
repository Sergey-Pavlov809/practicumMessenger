import Handlebars from "handlebars";
import Block from "../../core/Block";
import { StoreApp } from "../../core/Store";
import { withStore } from "../../core/withStore";
import { Button } from "../Button";
import { SearchUser } from "../searchUser";
import "./styles.less";

import { tmpl } from "./popupDeleteUser.tmpl";

const popupDeleteUser = Handlebars.compile(tmpl);

class PopupDeleteUserBase extends Block {
  init() {
    this.children.buttonClose = new Button({
      type: "button",
      className: "popup__close",
      events: {
        click: (evt) => {
          evt.preventDefault();
          StoreApp.dispatch({ popups: { deleteUsers: false } });
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
    return this.compile(popupDeleteUser, this.props);
  }
}

export const PopupDeleteUser = withStore(PopupDeleteUserBase);
