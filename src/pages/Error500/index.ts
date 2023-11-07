import Handlebars from "handlebars";

import Block from "../../core/Block";
import { Error500Tmpl } from "./Error500.tmpl";
import { ErrorBlock } from "../../components/Error";

const error500 = Handlebars.compile(Error500Tmpl);

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
