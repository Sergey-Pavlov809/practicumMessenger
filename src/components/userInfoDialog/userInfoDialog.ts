import Handlebars from "handlebars";

import { tmpl } from "./userInfoDialog.tmpl";
import Block from "../../core/Block";

import "./styles.less";
import { withStore } from "../../core/withStore";
interface UserInfoDialogProps {
  name: string,
  message?: string
}

const userInfoDialog = Handlebars.compile(tmpl);

export class UserInfoDialogComponent extends Block {
  constructor(props: UserInfoDialogProps) {

    super({ ...props });
  }


  render() {
    return this.compile(userInfoDialog, this.props);
  }
}

export const UserInfoDialog = withStore(UserInfoDialogComponent);
