import Handlebars from "handlebars";
import "./Registration.less";
import Block from "../../core/Block";
import { tmpl } from "./Registration.tmpl";
import { Registration } from "../../components/Registration";

const registration = Handlebars.compile(tmpl);

export class SignIn extends Block {
  constructor(props: {}) {
    const registration = new Registration({});

    super({ registration, title: "Регистрация", ...props });
  }

  render() {
    return this.compile(registration, this.props);
  }
}
