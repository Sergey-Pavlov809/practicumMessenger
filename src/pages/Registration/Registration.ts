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
      return "Некорректное имя";
    }

    return "";
  }

  emailValidator(email: string): string {
    const emailPattern: RegExp =
      /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!emailPattern.test(email)) return "Некорректный емэйл";

    return "";
  }

  phoneValidator(phone: string): string {
    const pattern: RegExp = /^\+?\d{10,15}$/;

    if (!pattern.test(phone)) return "Некорректный номер";

    return "";
  }

  protected init() {
    const regInputs = [
      new Input({
        name: "login",
        label: "Логин",
        type: "text",
        placeholder: "Логин",
        className: "form-group",
        checkValidation: this.loginValidator,
      }),
      new Input({
        name: "first_name",
        label: "Введите имя",
        type: "text",
        placeholder: "Введите имя",
        className: "form-group",
        checkValidation: this.nameValidator,
      }),
      new Input({
        name: "second_name",
        label: "Введите фамилию",
        placeholder: "Введите фамилию",
        type: "text",
        className: "form-group",
        checkValidation: this.nameValidator,
      }),
      new Input({
        name: "phone",
        label: "Введите телефон",
        placeholder: "Введите телефон",
        type: "text",
        className: "form-group",
        checkValidation: this.phoneValidator,
      }),
      new Input({
        name: "email",
        label: "ВВедите почту",
        placeholder: "Введите почту",
        type: "text",
        className: "form-group",
        checkValidation: this.emailValidator,
      }),
      new Input({
        name: "password",
        label: "Введите пароль",
        placeholder: "Введите пароль",
        type: "password",
        className: "form-group",
        checkValidation: this.passwordValidator,
      }),
    ];

    this.children.form = new Form({
      inputs: regInputs,
      events: {
        submit: (e: Event) => this.onSubmit(e),
      },
      className: ``,
      button: new Button({ label: "Зарегистрироваться", type: "submit" }),
    });
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
    if (e.target && e.target instanceof HTMLFormElement) {
      const formData = new FormData(e?.target);
      const form: Record<string, FormDataEntryValue> = {};

      for (const [key, value] of Object.entries(formData)) {
        form[key] = value;
      }

      console.log(this.updateIsValidForm());

      console.log(this.isFormValid());

      if (this.isFormValid()) {
        window.location.href = "/dialogs";
      }
    }
  }

  protected render() {
    return this.compile(tmpl, this.props);
  }
}
