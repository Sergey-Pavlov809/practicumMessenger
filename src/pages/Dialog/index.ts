import Handlebars from "handlebars";
import "./Dialog.less";

import { Input } from "../../components/input";

import Block from "../../core/Block";
import { Button } from "../../components/Button";

import { withStore } from "../../core/withStore";
import { StoreApp } from "../../core/Store";

import { DialogList } from "../../types";
import pen from "./../../../static/icons/pen.svg"
import { DialogContent } from "../../components/DialogsContent";
import { PopupAddNewDialog } from "../../components/AddNewDialog";
import { UserInfoDialog } from "../../components/userInfoDialog";
import { getDialogUsers } from "../../controllers/DialogControllers";
import { tmpl } from "./Dialog.tmpl";
import { AddUser } from "../../components/AddUser";

const dialog = Handlebars.compile(tmpl);

export class DialogComponent extends Block {
  constructor(props: {}) {

    super( {
      pen,
      ...props,
    });
  }

  init() {
    this.children.inputSearch = new Input({
      name: "search",
      type: "search",
      placeholder: "Поиск...",
      inputClass: "input_search",
    });


    this.children.dialogContent = new DialogContent({});

    this.children.buttonCreateDialog = new Button({
      className: "dialog__button_create",
      text: "Создать диалог",
      events: {
        click: () => {
          StoreApp.dispatch({ modals: { newDialog: true }, openedNewDialog: true });
        },
      },
    });

    this.children.AddUserModal = new AddUser({});
    this.children.modalNewDialog =  new PopupAddNewDialog({})  ;
  }

  protected componentDidUpdate(_: any, newProps: any): boolean {
    this.children.userInfoDialog = newProps.dialogList?.map((dialog: DialogList) => {
      return new UserInfoDialog({
        name: dialog.title,
        events: {
          click: () => {
            getDialogUsers(dialog.id);

            StoreApp.dispatch({
              selectedDialog: {
                title: dialog.title,
                id: dialog.id,
              },
            });
          },
        },
      });
    });

    return true;
  }

  render() {
    return this.compile(dialog, this.props);
  }
}

export const Dialog = withStore(DialogComponent);
