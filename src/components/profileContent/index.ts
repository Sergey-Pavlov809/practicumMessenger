import Handlebars from "handlebars";

import Block from "../../core/Block";
import { Input } from "../Input";
import { Button } from "../Button";
import { LinkButton } from "../LinkButton";
import { withStore } from "../../core/withStore";

import "./ProfileContent.less";
import { Avatar } from "../Avatar";
import { tmpl } from "./ProfileContent.tmpl";
import { blur, focus, handleSubmit } from "../../utils/validate";
import { logout } from "../../controllers/AuthController";
import { changeUserIPassword, changeIUserProfile } from "../../controllers/UsersControllers";

import { IUserProfile } from "../../types";

const profileContent = Handlebars.compile(tmpl);

export class ProfileContentComponent extends Block {
  constructor(props: { user: IUserProfile }) {

    const inputLogin = new Input({
      value: props.user.login,
      name: "login",
      type: "text",
      placeholder: "Логин",
      inputClass: "input_profile",
      inputContainerClass: "input__container_profile",
      events: {
        focusin: (e) => focus(e),
        focusout:(e) => blur(e),
      },
    });

    const inputPhone = new Input({
      value: props.user.phone,
      name: "phone",
      type: "phone",
      placeholder: "Телефон",
      inputClass: "input_profile",
      inputContainerClass: "input__container_profile",
      events: {
        focusin: (e) => focus(e),
        focusout:(e) => blur(e),
      },
    });

    const inputEmail = new Input({
      value: props.user.email,
      name: "email",
      type: "email",
      placeholder: "Email",
      inputClass: "input_profile",
      inputContainerClass: "input__container_profile",
      events: {
        focusin: (e) => focus(e),
        focusout:(e) => blur(e),
      },
    });

    const inputFirstName = new Input({
      value: props.user.first_name,
      name: "first_name",
      type: "text",
      placeholder: "Имя",
      inputClass: "input_profile",
      inputContainerClass: "input__container_profile",
      events: {
        focusin: (e) => focus(e),
        focusout:(e) => blur(e),
      },
    });

    const inputSecondName = new Input({
      value: props.user.second_name,
      name: "second_name",
      type: "text",
      placeholder: "Фамилия",
      inputClass: "input_profile",
      inputContainerClass: "input__container_profile",
      events: {
        focusin: (e) => focus(e),
        focusout:(e) => blur(e),
      },
    });

    const inputDisplayName = new Input({
      value: props.user.display_name,
      name: "display_name",
      type: "text",
      placeholder: "Имя в аккаунте",
      inputClass: "input_profile",
      inputContainerClass: "input__container_profile",
    });

    const inputNewIPassword = new Input({
      value: props.user.newIPassword,
      name: "newIPassword",
      type: "password",
      placeholder: "Новый пароль",
      inputClass: "input_profile",
      inputContainerClass: "input__container_profile",
      events: {
        focusin: (e) => focus(e),
        focusout:(e) => blur(e),
      },
    });

    const inputOldIPassword = new Input({
      value: props.user.oldIPassword,
      name: "oldIPassword",
      type: "password",
      placeholder: "Старый пароль",
      inputClass: "input_profile",
      inputContainerClass: "input__container_profile",
      events: {
        focusin: (e) => focus(e),
        focusout:(e) => blur(e),
      },
    });

    const linkButton = new LinkButton({
      linkText:"Выйти",
      events: {
        click: (e: Event) => {
          e.preventDefault();
          logout();
        },
      },
    });

    super({
      name: props.user.first_name,
      inputFirstName,
      inputEmail,
      inputPhone,
      inputSecondName,
      inputDisplayName,
      inputLogin,
      inputNewIPassword,
      inputOldIPassword,
      linkButton,
      ...props });
  }

  init() {
    this.children.avatar = new Avatar({});
    this.children.button = new Button({
      text:"Применить",
      className: "button_lightblue",
      events: {
        click: (e) => this.onSubmit(e),
      },
    });
  }

  onSubmit(evt: Event) {
    evt.preventDefault();

    const data = handleSubmit(evt);

    if (data) {
      changeIUserProfile(data);
    }

    if (data.oldIPassword && data.newIPassword) {
      changeUserIPassword(data as IUserProfile);
    }
  }

  render() {
    return this.compile(profileContent, this.props);
  }
}

export const ProfileContent = withStore(ProfileContentComponent);
