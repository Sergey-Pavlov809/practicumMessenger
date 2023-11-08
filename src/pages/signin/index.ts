import Handlebars from "handlebars";
import "./SignIn.less";
import Block from "../../core/Block";
import { SignInContent } from "../../components/signInContent";
import { tmpl } from "./signin.tmpl";

const signIn = Handlebars.compile(tmpl);

export class SignIn extends Block {
  constructor(props: {}) {
    const signInContent = new SignInContent({});

    super({ signInContent, title: "Регистрация", ...props });
  }

  render() {
    return this.compile(signIn, this.props);
  }
}
