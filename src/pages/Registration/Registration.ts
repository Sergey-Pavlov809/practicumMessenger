import { tmpl } from "./Registration.tmpl";
import "./Registration.less";
import Block from "./../../utils/Block";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Form } from "../../components/Form";
import { Link } from "../../components/Link";

export class Registration extends Block {
  public constructor(props = {}) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  loginValidator(login: string) {
    console.log(login);

    if (!login) return "asdf";

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
    console.log(password);

    if (!password) return "false";

    if (password.length < 8 || password.length > 40) {
      return "Некорректная длинна";
    }

    if (password.toLocaleLowerCase() === password)
      return "Должна быть хоты бы одна большая буква";

    return "";
  }

  nameValidator(name: string) {
    const regex = /^[А-ЯЁA-Z][А-ЯЁA-Zа-яёa-z\-]*$/;

    if (!regex.test(name)) {
      return "Строка содержит недопустимые символы";
    }

    return "";
  }

  protected init() {
    const regInputs = [
      new Input({
        name: "login",
        label: "Логин",
        type: "text",
        checkValidation: this.loginValidator,
      }),
      new Input({
        name: "first_name",
        label: "Введите имя",
        type: "text",
        checkValidation: this.nameValidator,
      }),
      new Input({
        name: "second_name",
        label: "Введите фамилию",
        type: "text",
        checkValidation: this.nameValidator,
      }),
      new Input({
        name: "phone",
        label: "Введите телефон",
        type: "text",
        checkValidation: this.nameValidator,
      }),
      new Input({
        name: "email",
        label: "ВВедите почту",
        type: "text",
        checkValidation: this.nameValidator,
      }),
      new Input({
        name: "password",
        label: "Введите пароль",
        type: "text",
        checkValidation: this.passwordValidator,
      }),
    ];

    this.children.form = new Form({
      inputs: regInputs,
      events: {
        submit: (e: Event) => this.onSubmit(e),
      },
      title: "Вход",
      button: new Button({ label: "Зарегистрироваться", type: "submit" }),
    });
  }

  isLoginFormValid = (): boolean => {
    if (this.children.form instanceof Form) {
      return this.children.form.isFormValid();
    }

    return false;
  };

  handlecheckValidationForm = (): void => {
    if (this.children.form instanceof Form) {
      this.children.form.checkValidationInputs();
    }
  };

  private onSubmit(e: Event) {
    e.preventDefault();
    if (e.target && e.target instanceof HTMLFormElement) {
      const formData = new FormData(e?.target);
      const form: Record<string, FormDataEntryValue> = {};

      for (const [key, value] of Object.entries(formData)) {
        form[key] = value;
      }

      console.log(this.handlecheckValidationForm());

      console.log(this.isLoginFormValid());

      if (this.isLoginFormValid()) {
        window.location.href = "/dialogs";
        this.removeEvents();
      }
    }
  }

  protected render() {
    return this.compile(tmpl, this.props);
  }
}
