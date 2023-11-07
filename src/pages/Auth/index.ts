import Handlebars from "handlebars";

import "./Auth.less";
import Block from "../../core/Block";
import { tmpl } from "./Auth.tmpl";
import { Auth } from "../../components/Auth";


const login = Handlebars.compile(tmpl);

export class Login extends Block {
  constructor(props: {}) {
    const loginContent = new Auth({});

    super({ loginContent, title: "Войти", ...props });
  }

  render() {
    return this.compile(login, this.props);
  }
}
