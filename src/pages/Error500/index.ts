import Handlebars from "handlebars";

import Block from "../../core/Block";
import { tmpl } from "./Error500.tmpl";
import { ErrorBlock } from "../../components/Error";

const error500 = Handlebars.compile(tmpl);

export class Error500 extends Block {
  constructor(props: {}) {

    const error = new ErrorBlock({
      description: "Злые грызуны атакуют сервера",
    });

    super( { error, ...props });
  }

  render() {
    return this.compile(error500, this.props);
  }
}
