import Block from "../../utils/Block";
import { tmpl } from "./Error400.tmpl";

export class Error400 extends Block {
  constructor(props = {}) {
    super(props);
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
