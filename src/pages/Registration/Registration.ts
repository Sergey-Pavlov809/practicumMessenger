import { tmpl } from "./Registration.tmpl";
import "./Registration.less";
import Block from "./../../utils/Block";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Form } from "../../components/Form";
import { loginValidator, nameValidator, phoneValidator, emailValidator, passwordValidator } from "../../utils/validators";

export class Registration extends Block {
  public constructor(props = {}) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }



  protected init() {
    const regInputs = [
      new Input({
        name: "login",
        label: "Логин",
        type: "text",
        placeholder: "Логин",
        className: "form-group",
        checkValidation: loginValidator,
      }),
      new Input({
        name: "first_name",
        label: "Введите имя",
        type: "text",
        placeholder: "Введите имя",
        className: "form-group",
        checkValidation: nameValidator,
      }),
      new Input({
        name: "second_name",
        label: "Введите фамилию",
        placeholder: "Введите фамилию",
        type: "text",
        className: "form-group",
        checkValidation: nameValidator,
      }),
      new Input({
        name: "phone",
        label: "Введите телефон",
        placeholder: "Введите телефон",
        type: "text",
        className: "form-group",
        checkValidation: phoneValidator,
      }),
      new Input({
        name: "email",
        label: "ВВедите почту",
        placeholder: "Введите почту",
        type: "text",
        className: "form-group",
        checkValidation: emailValidator,
      }),
      new Input({
        name: "password",
        label: "Введите пароль",
        placeholder: "Введите пароль",
        type: "password",
        className: "form-group",
        checkValidation: passwordValidator,
      }),
    ];

    this.children.form = new Form({
      inputs: regInputs,
      events: {
        submit: (e: Event) => this.onSubmit(e),
      },
      className: "",
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
