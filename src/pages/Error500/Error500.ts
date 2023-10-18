import Block from "../../utils/Block";
import { tmpl } from "./Error500.tmpl";

type TProps = {};
export class Error500 extends Block {
  constructor(props = {}) {
    super(props);
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
