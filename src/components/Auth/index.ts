import Handlebars from "handlebars";

import Block from "../../core/Block";
import { Button } from "../Button";
import { Input } from "../Input";
import { focus, blur, handleSubmit } from "../../utils/validate";
import { signIn } from "../../controllers/AuthController";

import "./Auth.less";

import { tmpl } from "./Auth.tmpl";
import { ISignUpData } from "../../types";
import { Link } from "../Link";

const login = Handlebars.compile(tmpl);

export class Auth extends Block {
  constructor(props: {}) {

    const inputLogin = new Input({
      name:"login",
      type:"text",
      label:"Логин",
      events: {
        focusin: (e) => focus(e),
        focusout:(e) => blur(e),
      },
    });

    const inputPassword = new Input({
      name: "password",
      type: "password",
      events: {
        focusin: (e) => focus(e),
        focusout:(e) => blur(e),
      },
      label: "Пароль",
    });

    const linkButton = new Link({
      label:"Нет аккаунта?",
      href: "/signin",
    });

    super( {
      inputLogin,
      inputPassword,
      linkButton,
      ...props });
  }

  init() {
    this.children.button = new Button({
      className: "button",
      label: "Войти",
      events: {
        click: (e) => this.onSubmit(e),
      },
    });
  }
  

  onSubmit(evt: Event) {
    evt.preventDefault();

    const data = handleSubmit(evt);

    console.log(data)

    if (data) {
      signIn(data as ISignUpData).then();
    }
  }

  render() {
    return this.compile(login, this.props);
  }
}
