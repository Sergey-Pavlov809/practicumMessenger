import Handlebars from "handlebars";

import Block from "../../core/Block";
import { tmpl } from "./Error400.tmpl";
import { ErrorBlock } from "../../components/Error";

const error400 = Handlebars.compile(tmpl);

export class Error400 extends Block {
  constructor(props: {}) {

    const error = new ErrorBlock({
      title: "",
      description: "Что то пошло не так..............",
    });

    super({ error, ...props });
  }

  render() {
    return this.compile(error400, this.props);
  }
}
