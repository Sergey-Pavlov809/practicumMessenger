import Handlebars from "handlebars";

import Block from "../../core/Block";
import { Button } from "../Button";
import { Input } from "../Input";
import { LinkButton } from "../LinkButton";
import { signUp } from "../../controllers/AuthController";

import "./styles.less";

import { tmpl } from "./SignInContent.tmpl";
import { blur, focus, handleSubmit } from "../../utils/validate";
import { ISignUp } from "../../types";

const signIn = Handlebars.compile(tmpl);

export class SignInContent extends Block {
  constructor(props: {}) {

    const inputLogin = new Input({
      name: "login",
      type: "text",
      placeholder: "Логин",
      events: {
        focus: (e) => focus(e),
        blur:(e) => blur(e),
      },
    });

    const inputIPassword = new Input({
      name: "password",
      type: "password",
      placeholder: "Пароль",
      events: {
        focus: (e) => focus(e),
        blur:(e) => blur(e),
      },
    });

    const inputPhone = new Input({
      name: "phone",
      type: "phone",
      placeholder: "Телефон",
      events: {
        focus: (e) => focus(e),
        blur:(e) => blur(e),
      },
    });

    const inputEmail = new Input({
      name: "email",
      type: "email",
      placeholder: "Email",
      events: {
        focus: (e) => focus(e),
        blur:(e) => blur(e),
      },
    });

    const inputFirstName = new Input({
      name: "first_name",
      type: "text",
      placeholder: "Имя",
      events: {
        focus: (e) => focus(e),
        blur:(e) => blur(e),
      },
    });

    const inputSecondName = new Input({
      name: "second_name",
      type: "text",
      placeholder: "Фамилия",
      events: {
        focus: (e) => focus(e),
        blur:(e) => blur(e),
      },
    });

    const linkButton = new LinkButton({
      linkText:"Уже есть аккаунт?",
      href: "/login",
    });

    super( {
      inputLogin,
      inputIPassword,
      inputEmail,
      inputFirstName,
      inputSecondName,
      inputPhone,
      linkButton,
      ...props });
  }

  init() {
    this.children.button = new Button({
      className: "button_lightblue",
      text: "Зарегистрироваться",
      events: {
        click: (evt) => this.onSubmit(evt),
      },
    });
  }

  onSubmit(evt: Event) {
    evt.preventDefault();

    const data = handleSubmit(evt) as ISignUp;

    console.log(data);
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
