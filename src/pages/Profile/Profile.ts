import { tmpl } from "./Profile.tmpl";
import "./Profile.less";
import Block from "../../utils/Block";
import { Input } from "../../components/Input";
import {
  emailValidator,
  loginValidator,
  nameValidator,
  phoneValidator,
} from "../../utils/validators";
import { Form } from "../../components/Form";
import { Button } from "../../components/Button";

const PROFILE_DATA = {
  display_name: "display_name",
  login: "login",
  first_name: "Sergey",
  second_name: "Pavlov",
  age: "16",
  email: "asdqwe@mail.ru",
  avatar: "https://telegram.org/img/t_logo.png",
  phone: "1234143534",
};
export class Profile extends Block {
  nameValidator: ((args: string) => string | null) | undefined;
  constructor(props = {}) {
    super(props);
  }

  updateIsValidForm = (): void => {
    if (this.children.form instanceof Form) {
      this.children.form.checkValidationInputs();
    }
  };

  isFormValid = (): boolean => {
    if (this.children.form instanceof Form) {
      return this.children.form.isFormValid();
    }

    return false;
  };

  private onSubmit(e: Event) {
    e.preventDefault();

    this.updateIsValidForm();

    if (this.isFormValid()) {
      window.location.href = "/dialogs";
    }
  }

  protected init() {
    const regInputs = [
      new Input({
        name: "login",
        label: "Логин",
        type: "text",
        value: PROFILE_DATA.login,
        checkValidation: loginValidator,
      }),
      new Input({
        name: "display_name",
        label: "Отображаемое имя",
        type: "text",
        value: PROFILE_DATA.display_name,
        checkValidation: loginValidator,
      }),
      new Input({
        name: "first_name",
        label: "Введите имя",
        type: "text",
        value: PROFILE_DATA.first_name,
        checkValidation: nameValidator,
      }),
      new Input({
        name: "second_name",
        label: "Введите фамилию",
        type: "text",
        value: PROFILE_DATA.second_name,
        checkValidation: nameValidator,
      }),
      new Input({
        name: "phone",
        label: "Введите телефон",
        type: "text",
        value: PROFILE_DATA.phone,
        checkValidation: phoneValidator,
      }),
      new Input({
        name: "email",
        label: "Введите почту",
        type: "text",
        value: PROFILE_DATA.email,
        checkValidation: emailValidator,
      }),
      new Input({
        name: "avatar",
        label: "",
        type: "file",
        value: PROFILE_DATA.avatar,
      }),
    ];

    this.children.form = new Form({
      inputs: regInputs,
      events: {
        submit: (e: Event) => this.onSubmit(e),
      },
      button: new Button({ label: "Сохранить", type: "submit" }),
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
