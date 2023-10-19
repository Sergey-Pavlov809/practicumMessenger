import { tmpl } from "./Dialogs.tmpl";
import "./Dialogs.less";
import Block from "../../utils/Block";
import { Button } from "../../components/Button";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";

const dialogues = ["Сережа", "выф", "орлеп", "asd"];

const messages = [
  {
    sender: "Сережа",
    text: "Прив!!!",
  },
  {
    sender: "Сережа",
    text: "Как дела",
  },
  {
    sender: "Сережа",
    text: "Смайл",
  },
  {
    sender: "Сережа",
    text: "Смайл",
  },
];

const selectedDialogue = {
  name: "Сережа",
  messages,
};

type TProps = {};
export class Dialogs extends Block {
  constructor(props = {}) {
    super(props);

    console.log(dialogues);

    this.onSubmit = this.onSubmit.bind(this);
  }

  private onSubmit(e: Event) {
    e.preventDefault();
    console.log("onSubmit");
  }

  messageValidator(message: string) {
    if (!message) return "";

    if (message.length === 0) {
      return "Пустое сообщение";
    }

    return "";
  }

  protected init() {
    (this.children.form = new Form({
      inputs: [
        new Input({
          name: "message",
          type: "text",
          placeholder: "сообщение",
          checkValidation: this.messageValidator,
        }),
      ],
      events: {
        submit: (e: Event) => this.onSubmit(e),
      },
      button: new Button({ label: "Send!", type: "submit" }),
      className: "message-input",
    })),
      (this.props.selectedDialogue = selectedDialogue),
      (this.props.dialogues = dialogues);
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
