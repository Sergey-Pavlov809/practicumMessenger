import Handlebars from "handlebars";
import { tmpl } from "./Auth.tmpl";
import "./Auth.less";
import Block from "../../utils/Block";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Form } from "../../components/Form";
import { Link } from "../../components/Link";

export class Auth extends Block {
  public constructor(props = {}) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  loginValidator(login: string) {
    if (!login) return "НЕ введен логин";

    if (login.length < 3 || login.length > 20) {
      return "Некорректная длинна";
    }

    const regex = /^[a-zA-Z0-9_-]+$/;
    if (!regex.test(login)) {
      return "Содержит недопустимые символы";
    }

    if (/^\d+$/.test(login)) {
      return "Содержит недопустимые символы";
    }

    return "";
  }

  passwordValidator(password: string) {
    if (!password) return "false";

    if (password.length < 8 || password.length > 40) {
      return "Некорректная длинна";
    }

    if (password.toLocaleLowerCase() === password) {
      return "Должна быть хоты бы одна большая буква";
    }

    return "";
  }

  protected init() {
    (this.children.form = new Form({
      inputs: [
        new Input({
          name: "login",
          label: "Логин",
          type: "text",
          placeholder: "Логин",
          className: "form-group",
          checkValidation: this.loginValidator,
        }),
        new Input({
          name: "password",
          label: "Пароль",
          type: "password",
          checkValidation: this.passwordValidator,
        }),
      ],
      events: {
        submit: (e: Event) => this.onSubmit(e),
      },
      className: "registration-form",
      button: new Button({ label: "Войти", type: "submit" }),
    })),
      (this.children.link = new Link({
        label: "Нет аккаунта?",
        url: "/register",
      }));
  }

  isFormValid = (): boolean => {
    if (this.children.form instanceof Form) {
      return this.children.form.isFormValid();
    }

    return false;
  };

  updateIsValidForm = (): void => {
    if (this.children.form instanceof Form) {
      this.children.form.checkValidationInputs();
    }
  };

  private onSubmit(e: Event) {
    console.log("call");
    e.preventDefault();
    if (e.target) {
      this.updateIsValidForm();

      if (this.isFormValid()) {
        window.location.href = "/dialogs";
      }
    }
  }

  protected render() {
    return this.compile(tmpl, this.props);
  }
}
