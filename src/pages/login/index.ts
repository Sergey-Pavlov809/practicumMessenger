import Handlebars from "handlebars";

import "./Login.less";
import Block from "../../core/Block";
import { LoginContent } from "../../components/loginContent";
import { tmpl } from "./login.tmpl";

const login = Handlebars.compile(tmpl);

export class Login extends Block {
  constructor(props: {}) {
    const loginContent = new LoginContent({});

    super({ loginContent, title: "Войти", ...props });
  }

  render() {
    return this.compile(login, this.props);
  }
}
