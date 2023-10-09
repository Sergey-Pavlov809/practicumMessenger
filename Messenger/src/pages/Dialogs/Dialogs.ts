import Handlebars from "handlebars";
import { tmpl } from "./Dialogs.tmpl";
import "./Dialogs.less";

const dialogues = [{ name: "Сережа" }, { name: "qwe" }, { name: "zxc" }];

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

export const Dialogs = () => {
  return Handlebars.compile(tmpl)({ dialogues, selectedDialogue });
};
