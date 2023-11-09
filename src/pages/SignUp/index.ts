import Handlebars from "handlebars";
import "./SignUp.less";
import Block from "../../core/Block";
import { tmpl } from "./SignUp.tmpl";
import { SignUpContent } from "../../components/SignUpContent";

const signIn = Handlebars.compile(tmpl);

export class SignUp extends Block {
  constructor(props: {}) {
    const signInContent = new SignUpContent({});

    super({ signInContent, title: "Регистрация", ...props });
  }

  render() {
    return this.compile(signIn, this.props);
  }
}
