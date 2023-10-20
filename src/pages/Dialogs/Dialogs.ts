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

export class Dialogs extends Block {
  constructor(props = {}) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  isFormValid = (): boolean => {
    if (this.children.form instanceof Form) {
      return this.children.form.isFormValid();
    }

    return false;
  };

  updateIsValidForm = (): void => {
    if (this.children.form instanceof Form) {
      this.children.form.checkValidationInputs();
    }
  };

  private onSubmit(e: Event) {
    e.preventDefault();

    this.updateIsValidForm();

    if (this.isFormValid()) {
      window.location.href = "/dialogs";
    }
  }

  protected init() {
    (this.children.form = new Form({
      inputs: [
        new Input({
          name: "message",
          type: "text",
          placeholder: "сообщение",
          checkValidation: messageValidator,
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
function messageValidator(args: string): string | null {
  throw new Error("Function not implemented.");
}

