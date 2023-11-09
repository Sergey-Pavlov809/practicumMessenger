import Handlebars from "handlebars";
import Block from "../../core/Block";
import { StoreApp } from "../../core/Store";
import { withStore } from "../../core/withStore";
import { searchUser } from "../../controllers/UsersControllers";
import { Button } from "../Button";
import { Input } from "../Input";
import "./styles.less";
import { tmpl } from "./AddUser.tmpl";
import { SearchUser } from "../SearchUser";

const modalAddUser = Handlebars.compile(tmpl);

class AddUserComponent extends Block {
  init() {
    this.children.inputSearchUser = new Input({
      type: "text",
      name: "searchUser",
      placeholder: "Введите логин",
      inputClass: "modal__input_search_user",
    });

    this.children.buttonSearch = new Button({
      text: "Поиск",
      type: "submit",
      className: "modal__button_search",
      events: {
        click: (evt) => {
          evt.preventDefault();

          const input = document.querySelector(".modal__input_search_user") as HTMLInputElement;
          const { value } = input;

          if (value.length > 1) {
            searchUser({ login: value }).finally(() => {
              const users = StoreApp.getState().foundUsers;

              if (users.length > 0) {
                this.setProps({ isSearch: true, error: false });
              } else {
                this.setProps({ error: true, isSearch: false });
              }
            });
          }
        },
      },
    });

    this.children.buttonClose = new Button({
      type: "button",
      className: "modal__close",
      events: {
        click: (evt) => {
          evt.preventDefault();

          this.setProps({ isSearch: false });

          StoreApp.dispatch({ modals: { addUsers: false } });
        },
      },
    });
  }

  protected componentDidUpdate(_: any, newProps: any): boolean {
    this.children.searchList = newProps.foundUsers.map((data: any) => {
      return new SearchUser({
        ...data,
        btnName: "Добавить",
      });
    });

    return true;
  }

  render() {
    return this.compile(modalAddUser, this.props);
  }
}

export const AddUser = withStore(AddUserComponent);
