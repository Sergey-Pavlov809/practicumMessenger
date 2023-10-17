import Block from "../../utils/Block";
import { tmpl } from "./input.tmpl";

//type="text" class="form-control" id="username" name="username" placeholder="Введите имя пользователя"
interface TLink {
  label: string;
  url?: string;
  class?: string;
  events?: Record<string, (args: any) => void>;
}

export class Link extends Block<TLink> {
  constructor(props: TLink) {
    super(props);
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}