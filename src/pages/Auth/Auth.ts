import { tmpl } from "./Auth.tmpl";
import "./Auth.less";
import Block from "../../utils/Block";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Form } from "../../components/Form";
import { Link } from "../../components/Link";
import { loginValidator, passwordValidator } from "../../utils/validators";

export class Auth extends Block {
  public constructor(props = {}) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
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
          checkValidation: loginValidator,
        }),
        new Input({
          name: "password",
          label: "Пароль",
          type: "password",
          checkValidation: passwordValidator,
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
