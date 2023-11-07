import Handlebars from "handlebars";
import Block from "../../core/Block";

import { changeUserAvatar } from "../../controllers/UsersControllers";
import { withStore } from "../../core/withStore";

import "./Avatar.less";
import { Input } from "../Input";
import pen from "./../../../static/icons/pen.png";
import { tmpl } from "./avatar.tmpl";

const avatar = Handlebars.compile(tmpl);

class AvatarBase extends Block {
  constructor(props: {}) {
    super({ pen, ...props });
  }

  init() {
    this.children.inputAvatar = new Input({
      name: "avatar",
      className: "",
      type: "file",
      events: {
        change: (e) => this.changeImg(e),
      },
    });
  }

  changeImg(evt: Event) {
    const target = evt.target as HTMLInputElement;

    if (target.files && target.files.length > 0) {
      const { files } = target;
      const file = files[0];
      const formData = new FormData();

      formData.append("avatar", file);

      changeUserAvatar(formData);
    }
  }

  render() {
    return this.compile(avatar, this.props);
  }
}

export const Avatar = withStore(AvatarBase);
