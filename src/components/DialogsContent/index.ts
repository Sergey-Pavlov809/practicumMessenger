import Handlebars from "handlebars";
import Block from "../../core/Block";

import more from "./img/more.png";
import { withStore } from "../../core/withStore";
import { Message } from "../message";
import { Input } from "../input";
import { blur, focus } from "../../utils/validate";

import { DialogUsers } from "../../types";
import { Button } from "../Button";
import { sendMessage } from "../../controllers/MessagesControllers";
import "./DialogsContent.less";
import { tmpl } from "./DialogsContent.tmpl";
import { StoreApp } from "../../core/Store";
import { Header } from "../Header";
import { Message as IMessage } from "../../types";
import { getDialogs } from "../../controllers/DialogControllers";
import { DeleteUser } from "../DeleteUser";

const dialogContent = Handlebars.compile(tmpl);

export class DialogContentComponent extends Block {
  constructor(props: {}) {
    super({ more, ...props });
  }

  init() {
    getDialogs().then();

    this.children.sendMessageButton = new Button({
      className: "dialog__send_message_button",
      events: {
        click:() => {
          this.onSubmit();
        },
      },
    });

    this.children.inputMessage = new Input({
      name: "message",
      type: "text",
      placeholder: "Сообщение...",
      inputClass: "input_message",
      inputContainerClass: "input__container_message",
      events: {
        focusin: (e) => focus(e),
        focusout:(e) => blur(e),
      },
    });

    this.children.DeleteUserModal = new DeleteUser({ dialogUsers: [] });
  }


  onSubmit() {
    const input = document.querySelector(".input_message") as HTMLInputElement;

    let { value } = input;

    if (value.length > 0) {
      const chatId = StoreApp.getState().selectedDialog!.id!;

      sendMessage(chatId, value);

      getDialogs().then();
    }
  }

  protected componentDidUpdate(_: any, newProps: any): boolean {
    const { messageList, selectedDialog, dialogUsers, user } = newProps;
    const { title, id } = selectedDialog;

    if (id) {
      this.children.messageDialog = messageList[id].map((message: IMessage) => {
        return new Message({
          messageClass: newProps.user.id === message.user_id ?
            "message__user_type_auth" : "message__user_type_notAuth",
          text: message.content,
        });
      });

      const usersInDialog = 
        dialogUsers.map((userInDialog: DialogUsers)  => userInDialog.login).join(", ");
      const usersList = dialogUsers.filter((el: DialogUsers) => el.login !== user.login);

      this.children.header = new Header({ title, usersInDialog });
      this.children.DeleteUserModal.setProps({ dialogUsers: usersList });
    }

    return true;
  }

  render() {
    return this.compile(dialogContent, this.props);
  }
}

export const DialogContent = withStore(DialogContentComponent);
