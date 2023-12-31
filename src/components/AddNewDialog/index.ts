import Handlebars from "handlebars";
import Block from "../../core/Block";
import { StoreApp } from "../../core/Store";
import { withStore } from "../../core/withStore";
import { Button } from "../Button";
import { Input } from "../Input";

import "./AddNewDialog.less";
import { tmpl } from "./AddNewDialog.tmpl";
import { createDialogs } from "../../controllers/DialogControllers";

const modalAddNewDialog = Handlebars.compile(tmpl);

export class AddNewDialogComponent extends Block {
  init() {
    this.children.inputAddNewDialog = new Input({
      type: "text",
      inputContainerClass: "create-new-dialog__input_create_dialog",
      inputClass: "modal__input_create_dialog",
      name: "input_add_new_dialog",
      placeholder: "Введите название диалога",
    });

    this.children.buttonClose = new Button({
      type: "button",
      className: "",
      text: "Закрыть",
      events: {
        click: (evt) => {
          evt.preventDefault();

          this.setProps({ isSearch: false });

          StoreApp.dispatch({ modals: { newDialog: false }, openedNewDialog: false });
        },
      },
    });

    this.children.buttonCreateDialog = new Button({
      text: "Сохранить",
      type: "submit",
      className: "create-new-dialog__create_dialog_button",
      events: {
        click: (evt) => {
          evt.preventDefault();
          const input = document.querySelector(".modal__input_create_dialog") as HTMLInputElement;
          let { value } = input;

          if (value.length > 0) {
            createDialogs({ title: value }).finally(() => {
              value = "";
              StoreApp.dispatch({ modals: {} });
            });
          }
        },
      },
    });
  }

  render() {
    return this.compile(modalAddNewDialog, this.props);
  }
}

export const PopupAddNewDialog = withStore(AddNewDialogComponent);
