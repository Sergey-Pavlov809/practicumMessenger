import Handlebars from "handlebars";
import Block from "../../core/Block";
import { Button } from "../Button";
import { Input } from "../Input";
import { LinkButton } from "../LinkButton";
import { focus, blur, handleSubmit } from "../../utils/validate";
import { signIn } from "../../controllers/AuthController";
import "./LoginContent.less";
import { ISignIn } from "../../types";
import { tmpl } from "./LoginContent.tmpl";

const login = Handlebars.compile(tmpl);

export class LoginContent extends Block {
  constructor(props: {}) {

    const inputLogin = new Input({
      name:"login",
      type:"text",
      placeholder:"Логин",
      events: {
        focus: (e) => focus(e),
        blur:(e) => blur(e),
      },
      error: "Некорректный логин",  
    });

    const inputIPassword = new Input({
      name: "password",
      type: "password",
      events: {
        focus: (e) => focus(e),
        blur:(e) => blur(e),
      },
      placeholder: "Пароль",
    });

    const linkButton = new LinkButton({
      linkText:"Нет аккаунта?",
      href: "/signin",
    });

    super( {
      inputLogin,
      inputIPassword,
      linkButton,
      ...props });
  }

  init() {
    this.children.button = new Button({
      className: "button_lightblue",
      text: "Войти",
      events: {
        click: (e) => this.onSubmit(e),
      },
    });
  }

  onSubmit(evt: Event) {
    evt.preventDefault();

    const data = handleSubmit(evt) as ISignIn;

    if (data) {
      signIn(data).then();
    }
  }

  render() {
    return this.compile(login, this.props);
  }
}
