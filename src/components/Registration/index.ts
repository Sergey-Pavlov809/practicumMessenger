import Handlebars from "handlebars";

import Block from "../../core/Block";
import { Button } from "../Button";
import { Input } from "../Input";
import { signUp } from "../../controllers/AuthController";

import "./Registration.less";


import { blur, focus, handleSubmit } from "../../utils/validate";
import { ISignUpData } from "../../types";
import { Link } from "../Link";
import { tmpl } from "./Registration.tmpl";

const signIn = Handlebars.compile(tmpl);

export class Registration extends Block {
  constructor(props: {}) {

    const inputLogin = new Input({
      name: "login",
      type: "text",
      label: "Логин",
      events: {
        focusin: (e) => focus(e),
        focusout:(e) => blur(e),
      },
    });

    const inputPassword = new Input({
      name: "password",
      type: "password",
      label: "Пароль",
      events: {
        focusin: (e) => focus(e),
        focusout:(e) => blur(e),
      },
    });

    const inputPhone = new Input({
      name: "phone",
      type: "phone",
      label: "Телефон",
      events: {
        focusin: (e) => focus(e),
        focusout:(e) => blur(e),
      },
    });

    const inputEmail = new Input({
      name: "email",
      type: "email",
      label: "Email",
      events: {
        focusin: (e) => focus(e),
        focusout:(e) => blur(e),
      },
    });

    const inputFirstName = new Input({
      name: "first_name",
      type: "text",
      label: "Имя",
      events: {
        focusin: (e) => focus(e),
        focusout:(e) => blur(e),
      },
    });

    const inputSecondName = new Input({
      name: "second_name",
      type: "text",
      label: "Фамилия",
      events: {
        focusin: (e) => focus(e),
        focusout:(e) => blur(e),
      },
    });

    const linkButton = new Link({
      label:"Уже есть аккаунт?",
      href: "/login",
    });

    super( {
      inputLogin,
      inputPassword,
      inputEmail,
      inputFirstName,
      inputSecondName,
      inputPhone,
      linkButton,
      ...props });
  }

  init() {
    this.children.button = new Button({
      className: "button_purple",
      label: "Зарегистрироваться",
      events: {
        click: (evt) => this.onSubmit(evt),
      },
    });
  }

  onSubmit(evt: Event) {
    evt.preventDefault();

    const data = handleSubmit(evt) as ISignUpData;

    // console.log(data);
    if (data) {
      const newData = {
        first_name: data.first_name,
        second_name: data.second_name,
        login: data.login,
        email: data.email,
        password: data.password,
        phone: data.phone,
      };

      signUp(newData).then();
    }
  }

  render() {
    return this.compile(signIn, this.props);
  }
}
