import Handlebars from "handlebars";
import { tmpl } from "./Auth.tmpl";
import "./Auth.less";
import Block from "./../../utils/Block";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Form } from "../../components/Form";

export class Auth extends Block {
  constructor() {
    super({});
  }

  Submit(event: any) {
    event.preventDefault();
    //if (!event.target) return;
    console.log(event.target);

    const formData = new FormData(event.target);

    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
    console.log(formData);
  }
  /**
   *  (this.children.button = new Button({
      label: "Войти №2",
      events: {
        click: () => {
          console.log("asd");
          this.onSubmit.bind(this);
        },
      },
      type: "submit",
    })),
      (this.children.username = new Input({
        type: "form",
        class: "form-control",
        id: "username",
        name: "username",
        placeholder: "Введите имя пользователя",
        label: "Имя пользователя",
      })),
      (this.children.password = new Input({
        type: "form",
        class: "form-control",
        id: "password",
        name: "password",
        placeholder: "Введите пароль",
      }));
   */

  inputsComp = [
    new Input({
      type: "form",
      class: "form-control",
      id: "username",
      name: "username",
      placeholder: "Введите имя пользователя",
      label: "Имя пользователя",
    }),
    new Input({
      type: "form",
      class: "form-control",
      id: "password",
      name: "password",
      placeholder: "Введите пароль",
    }),
  ];

  init() {
    this.children.form = new Form({
      inputs: [
        new Input({
          type: "form",
          class: "form-control",
          id: "username",
          name: "username",
          placeholder: "Введите имя пользователя",
          label: "Имя пользователя",
        }),
        new Input({
          type: "form",
          class: "form-control",
          id: "password",
          name: "password",
          placeholder: "Введите пароль",
        }),
      ],
      events: {
        submit: (e: Event) => this.Submit(e),
      },
      submitButton: new Button({ label: "Войти", type: "submit" }),
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
